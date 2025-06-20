import { Router } from 'express';
import { register, login } from '../controllers/user.controller.js';
import { refreshAccessToken, validateToken } from '../middleware/auth.middleware.js';

const router = Router();

// Public routes
router.post('/register', register);
router.post('/login', login);
router.post('/refresh-token', refreshAccessToken);

// Protected routes
router.get('/profile', validateToken, (req, res) => {
  res.json({ message: 'Protected route', userId: req.user?.userId });
});

export default router; 