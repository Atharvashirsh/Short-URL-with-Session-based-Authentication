//* Require the mongoose module
const mongoose = require("mongoose");

//* Set up the database schema for storing user authentication data
const userSchema = new mongoose.Schema(
    {
        //* Full name of the user
        name: {
            type: String,
            required: true,
        },
        //* Email of the user
        email: {
            type: String,
            required: true,
            unique: true,
        },
        //* Password of the user
        password: {
            type: String,
            required: true,
        },
    },
    //* Stores the time stamps of the data entry
    { timestamps: true }
);

//* Create the database model
const USER = mongoose.model("user", userSchema);

module.exports = USER;
