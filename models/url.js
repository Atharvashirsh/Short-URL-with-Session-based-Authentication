//* Require the mongoose module
const mongoose = require("mongoose");

//* Set up the database schema for storing URLs
const urlSchema = new mongoose.Schema({
    //* Unique identifier for the short URL
    shortId: {
        type: String,
        required: true,
        unique: true,
    },
    //* The original URL to which the short URL redirects
    redirectURL: {
        type: String,
        required: true,
    },
    //* Array to store visit history with timestamps
    visitHistory: [{ timestamp: { type: Number } }],
});

//* Create a Mongoose model named "URL" using the schema
const URL = mongoose.model("url", urlSchema);

//* Export the URL model for use in other files
module.exports = URL;
