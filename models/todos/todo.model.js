const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    content: {
        type: String,
        require: true,
    },
    complete: {
        type: Boolean,
        default: false
    },
    // To Get Info from other relation we need type and reference of model
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, {timestamps: true});

export const Todo = mongoose.model("Todo", todoSchema)