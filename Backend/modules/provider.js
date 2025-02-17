import mongoose from "mongoose";
import validator from "validator";

const ProvideUser = new mongoose.Schema({
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

const Provider = mongoose.model("Provider", ProvideUser);

export default Provider;


