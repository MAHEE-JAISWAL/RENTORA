import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/auth.routes.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1/RENTORA';

mongoose
    .connect(MONGODB_URI)
    .then(() => console.log("Database is connected BRO"))
    .catch((Err) => console.log(Err));

app.use('/api/auth', authRoutes);

app.listen(PORT, () => console.log(`Server is connected at port ${PORT}`));
