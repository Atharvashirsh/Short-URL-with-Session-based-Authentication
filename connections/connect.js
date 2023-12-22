//* Require the dotenv module and configure it with the "config.env" file path
require("dotenv").config({ path: `../config.env` });

//* Require the mongoose module
const mongoose = require("mongoose");

//* Use the MongoDB URI to connect to the cloud database
const uri = process.env.URI;

//* Create an async connection function
const connectDB = async () => {
    try {
        //* Connect to database
        const conn = await mongoose.connect(uri);

        //* Print if successful connection
        console.log(`MongoDB connected :${conn.connection.host}`);
    } catch (err) {
        //* Throw an error if connection failed
        console.log(err);
        process.exit(1);
    }
};

module.exports = connectDB;
