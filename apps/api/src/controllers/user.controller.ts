import { Request, Response, RequestHandler } from 'express';
import { z } from 'zod';
import { pool } from '../db/index.js';
import { hash, compare } from 'bcrypt';
import { generateTokens } from '../middleware/auth.middleware.js';
import logger from '../utils/logger.js';


export const register: RequestHandler = async (req: Request, res: Response) => {
  try {
    const validatedData = userSchema.parse(req.body);

    // Check if user already exists
    const existingUserResult = await pool.query(
      'SELECT * FROM users WHERE email = $1',
      [validatedData.email]
    );
    if (existingUserResult.rows.length > 0) {
      res.status(400).json({ 
        error: 'Email already registered',
        message: 'A user with this email already exists. Please use a different email or login.'
      });
      return;
    }

    const hashedPassword = await hash(validatedData.password, 10);

    const insertResult = await pool.query(
      `INSERT INTO users (email, password, name) VALUES ($1, $2, $3) RETURNING *`,
      [validatedData.email, hashedPassword, validatedData.name]
    );
    const user = insertResult.rows[0];

    const tokens = await generateTokens(user.id);
    res.status(201).json({ user, ...tokens });
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ errors: error.errors });
      return;
    }
    logger.error('Registration error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const login: RequestHandler = async (req, res) => {
  try {
    const { email, password } = userSchema.pick({ email: true, password: true }).parse(req.body);

    const userResult = await pool.query(
      'SELECT * FROM users WHERE email = $1',
      [email]
    );
    const user = userResult.rows[0];

    if (!user) {
      res.status(401).json({ error: 'Invalid credentials' });
      return;
    }

    const isValidPassword = await compare(password, user.password);

    if (!isValidPassword) {
      res.status(401).json({ error: 'Invalid credentials' });
      return;
    }

    const tokens = await generateTokens(user.id);
    res.json({ ...tokens });
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ errors: error.errors });
      return;
    }
    logger.error('Login error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}; 