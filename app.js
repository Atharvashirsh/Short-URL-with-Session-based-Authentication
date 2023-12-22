//* Require the dotenv module and configure it with the "config.env" file path
require("dotenv").config({ path: "./config.env" });

//* Set the PORT value from the .env file
const PORT = process.env.PORT;

//* Require the express module and Create the express application
const express = require("express");
const app = express();

//* Use the JSON parser to parse the JSON data of the body
app.use(express.json());

//* Import the Routes and set the base URL as "/url"
const urlRoute = require("./routes/routes");
app.use("/url", urlRoute);

//* Import the MongoDB connection module and run the function
const mongodbConnection = require("./connections/connect");
mongodbConnection();

//* Start the server and listen on given PORT
app.listen(PORT, () => {
    console.log(`Server is runnning on http://localhost:${PORT}`);
});
