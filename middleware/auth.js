//* Require the getter function of authentication hashmap
const { getUser } = require("../service/service");

//* Authentication middleware to only allow access to logged in user only
function restrictToLoggedInUserOnly(req, res, next) {
    const userUid = req.cookies?.uid;

    if (!userUid) return res.redirect("/login");

    const user = getUser(userUid);

    if (!user) return res.redirect("/login");

    req.user = user;
    next();
}

//* Authentication middleware to only allow access to logged in user only
function checkAuth(req, res, next) {
    const userUid = req.cookies?.uid;

    const user = getUser(userUid);

    req.user = user;
    next();
}

module.exports = { restrictToLoggedInUserOnly, checkAuth };
