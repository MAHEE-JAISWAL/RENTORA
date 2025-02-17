import mongoose from "mongoose";
import validator from "validator";

const SeekUser = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Invalid Email"],
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
    
});

const Seeker = mongoose.model("Seeker", SeekUser);

export default Seeker;

