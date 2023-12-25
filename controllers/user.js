//* Require the UUID Module (uuidv4 is an alias givent to v4)
const { v4: uuidv4 } = require("uuid");

//* Require the USER Database
const USER = require("../models/user");

//* Require the setter function of authentication hashmap
const { setUser } = require("../service/service");

//* Create user signup function that saves the user data to DB
async function userSignup(req, res) {
    const { name, email, password } = req.body;
    await USER.create({
        name,
        email,
        password,
    });

    return res.redirect("/");
}

//* Create user login function that validates the user data
async function userLogin(req, res) {
    const { email, password } = req.body;
    const user = await USER.findOne({ email, password });

    if (!user) {
        return res.render("login", { error: "Invalid Username or password" });
    }

    const sessionID = uuidv4();
    setUser(sessionID, user);
    res.cookie("uid", sessionID);
    return res.redirect("/");
}

module.exports = { userSignup, userLogin };
