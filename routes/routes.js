//* Require the express module and create a Router application
const express = require("express");
const router = express.Router();

//* Require the controller
const generateNewShortURL = require("../controllers/shorturl");
const redirectUser = require("../controllers/redirect");
const getAnalytics = require("../controllers/analytics");

//* POST route to generate short URL and add it to DB
router.post("/", generateNewShortURL);

//* GET route to open the URL fron short ID
router.get("/:shortid", redirectUser);

//* GET route to get the analytics of the short ID
router.get("/analytics/:shortid", getAnalytics);

//* Export the router application
module.exports = router;
