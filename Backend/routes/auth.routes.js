import express from 'express';
import {
    signup,
    logout,
    login,
    getAllUsers,
    getOneUser,
    deleteUser,
} from '../controllers/user.controllers.js';
import { authenticateToken } from '../middlewares/auth.middlewares.js';

const router = express.Router();

// Public Routes
router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', logout);

// Protected Routes
router.get('/users', authenticateToken, getAllUsers);
router.get('/users/:id', authenticateToken, getOneUser);
router.delete('/users/:id', authenticateToken, deleteUser);

export default router;