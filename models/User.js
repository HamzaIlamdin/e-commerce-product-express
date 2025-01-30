const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const userSchema = new Schema({
    firstName: {
        type: String,
        required: [true, "First Name is required Field"],
        minLength: [5, "First Name cannot be less than 5 characters"],
        maxLength: [15, "First Name cannot exceed 15  characters"],
    },
    lastName: {
        type: String,
        required: [true, "Last Name is required Field"],
        minLength: [5, "Last Name cannot be less than 5 characters"],
        maxLength: [15, "Last Name cannot exceed 15  characters"],
    },
    email: {
        type: String,
        required: [true, "Email is required Field"],
        minLength: [5, "Email cannot be less than 5 characters"],
        unique: true,
    },
    userName: {
        type: String,
        required: [true, "User Name is required Field"],
        minLength: [5, "User Name cannot be less than 5 characters"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Password is required Field"],
        minLength: [8, "Password cannot be less than 8 characters"],
    },

});

const User = mongoose.model("User", userSchema);

module.exports = User;