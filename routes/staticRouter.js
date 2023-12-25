const express = require("express");
const router = express.Router();
const URL = require("../models/url");

//* Create a GET route for the home URL
router.get("/", async (req, res) => {
    if (!req.user) return res.redirect("/login"); //* If user not found, redirect to login page
    const allUrls = await URL.find({ createdBy: req.user._id }); //* Only fetch the URLs created by the user
    return res.render("home", {
        urls: allUrls,
    });
});

//* Create a GET route for the signup URL
router.get("/signup", (req, res) => {
    return res.render("signup");
});

//* Create a GET route for the Login URL
router.get("/login", (req, res) => {
    return res.render("login");
});

module.exports = router;
