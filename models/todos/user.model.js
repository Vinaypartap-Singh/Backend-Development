import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        // If the field is required
        required: true,
        // Get unique data for unique data
        unique: true,
        // Lowercase data
        lowercase: true
    },
    email: {
        type: String,
        required: ["true", "Email required and must be unique"],
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
    }
}, {timestamps: true})

export const User = new mongoose.model("User", userSchema);