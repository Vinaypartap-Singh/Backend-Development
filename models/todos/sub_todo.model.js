const mongoose = require("mongoose");

const subTodo_Schema = new mongoose.Schema({}, {timestamps: true});

export const SubTodo = mongoose.model("SubTodo", subTodo_Schema)