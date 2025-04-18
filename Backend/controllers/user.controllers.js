import User from '../models/user.models.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

// Signup API
export const signup = async (req, res) => {
    try {
        const { name, email, password, confirmPassword } = req.body;

        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists 😊" });
        }

        // Check if passwords match
        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Passwords do not match 😊" });
        }

        // Create a new user
        const newUser = new User({ name, email, password, confirmPassword });
        await newUser.save();

        res.status(201).json({ message: "User registered successfully 😊" });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong 😊", error: error.message });
    }
};

// Login API
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if the user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found 😊" });
        }

        // Check if the password is correct
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: "Invalid credentials 😊" });
        }

        // Generate a JWT token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "3h" });

        res.status(200).json({ message: "Login successful 😊", token });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong 😊", error: error.message });
    }
};

// Get All Users API
export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: "Something went wrong 😊", error: error.message });
    }
};

// Get One User API
export const getOneUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: "User not found 😊" });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: "Something went wrong 😊", error: error.message });
    }
};

// Delete User API
export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndDelete(id);
        if (!user) {
            return res.status(404).json({ message: "User not found 😊" });
        }
        res.status(200).json({ message: "User deleted successfully 😊" });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong 😊", error: error.message });
    }
};

// Logout API
export const logout = async (req, res) => {
    try {
        // Invalidate the token on the client side by removing it from localStorage
        res.status(200).json({ message: "Logged out successfully 😊" });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong 😊", error: error.message });
    }
};