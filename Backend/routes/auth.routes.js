import express from 'express';
import User from '../models/user.models.js'; // Import the User model
import bcrypt from 'bcrypt';

const router = express.Router();

// Signup route
router.post('/signup', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists 😊" });
        }

        // Create a new user
        const newUser = new User({ name, email, password });
        await newUser.save();

        res.status(201).json({ message: "User registered successfully 😊" });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong 😊", error: error.message });
    }
});

export default router;