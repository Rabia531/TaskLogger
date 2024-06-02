const mongoose = require("mongoose");

const {Schema} = mongoose;

const taskSchema = new Schema({
    name: {
        type : String,
        required : true},
        completed: {
            type : Boolean,
            default : false,
            required : [true,"Please add a Task"]},
        },
        {timestemps: true}
);

module.exports = mongoose.model("Task", taskSchema, "tasks");