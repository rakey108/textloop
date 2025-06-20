import { Request, Response, NextFunction, RequestHandler } from 'express';
import { jwtVerify, SignJWT } from 'jose';
import logger from '../utils/logger.js';

interface JWTPayload {
  userId: number;
  type: 'access' | 'refresh';
}

export const validateToken: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization;
    
    if (!authHeader?.startsWith('Bearer ')) {
      res.status(401).json({ error: 'No token provided' });
      return;
    }

    const token = authHeader.split(' ')[1];
    
    try {
      const { payload } = await jwtVerify(
        token,
        new TextEncoder().encode(process.env.JWT_SECRET)
      ) as { payload: JWTPayload };

      if (payload.type !== 'access') {
        res.status(401).json({ error: 'Invalid token type' });
        return;
      }

      req.user = { userId: payload.userId };
      next();
    } catch (error: any) {
      if (error.code === 'ERR_JWT_EXPIRED') {
        res.status(401).json({ error: 'Token expired', code: 'TOKEN_EXPIRED' });
        return;
      }
      throw error;
    }
  } catch (error) {
    logger.error('Token validation error:', error);
    res.status(401).json({ error: 'Invalid token' });
  }
};

export const generateTokens = async (userId: number) => {
  const accessToken = await new SignJWT({ userId, type: 'access' })
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('15m')
    .sign(new TextEncoder().encode(process.env.JWT_SECRET));

  const refreshToken = await new SignJWT({ userId, type: 'refresh' })
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('7d')
    .sign(new TextEncoder().encode(process.env.JWT_SECRET));

  return { accessToken, refreshToken };
};

export const refreshAccessToken: RequestHandler = async (req, res) => {
  try {
    const { refreshToken } = req.body;

    if (!refreshToken) {
      res.status(400).json({ error: 'Refresh token is required' });
      return;
    }

    const { payload } = await jwtVerify(
      refreshToken,
      new TextEncoder().encode(process.env.JWT_SECRET)
    ) as { payload: JWTPayload };

    if (payload.type !== 'refresh') {
      res.status(401).json({ error: 'Invalid token type' });
      return;
    }

    const { accessToken, refreshToken: newRefreshToken } = await generateTokens(payload.userId);
    res.json({ accessToken, refreshToken: newRefreshToken });
  } catch (error) {
    logger.error('Token refresh error:', error);
    res.status(401).json({ error: 'Invalid refresh token' });
  }
}; 