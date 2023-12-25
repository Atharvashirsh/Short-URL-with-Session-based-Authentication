//* Require the dotenv module and configure it with the "config.env" file path
require("dotenv").config({ path: "./config.env" });

//* Require the path module
const path = require("path");

//* Set the PORT value from the .env file
const PORT = process.env.PORT;

//* Require the express module and Create the express application
const express = require("express");
const app = express();

//* Require the cookie parser module
const cookieParser = require("cookie-parser");

//* Require the authentication middleware
const { restrictToLoggedInUserOnly, checkAuth } = require("./middleware/auth");

//* Use the JSON parser to parse the JSON data as well as the Form data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//* Use the cookie parser to parse the cookies
app.use(cookieParser());

//* App configuration to set the public folder
app.use(express.static(path.join(__dirname, "views/public")));

//* Set EJS as the view engine
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

//* Import the Routes
const staticRouter = require("./routes/staticRouter");
const urlRoute = require("./routes/routes");
const userRoute = require("./routes/userRoute");

app.use("/url", restrictToLoggedInUserOnly, urlRoute); //* Added inline middleware to only '/url' routes
app.use("/", checkAuth, staticRouter);
app.use("/user", userRoute);

//* Import the MongoDB connection module and run the function
const mongodbConnection = require("./connections/connect");
mongodbConnection();

//* Start the server and listen on given PORT
app.listen(PORT, () => {
    console.log(`Server is runnning on http://localhost:${PORT}`);
});
