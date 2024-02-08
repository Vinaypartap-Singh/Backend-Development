import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        // If the field is required
        require: true,
        // Get unique data for unique data
        unique: true,
        // Lowercase data
        lowercase: true
    },
    email: {
        type: String,
        require: ["true", "Email required and must be unique"],
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        require: true,
    }
}, {timestamps: true})

export const User = new mongoose.model("User", userSchema);