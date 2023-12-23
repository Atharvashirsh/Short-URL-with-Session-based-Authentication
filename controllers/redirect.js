//* Require the URL Model(i.e our database)
const URL = require("../models/url");

//* Create a redirection function
async function redirect(req, res) {
    const shortid = req.params.shortid;
    const entry = await URL.findOneAndUpdate({ shortId: shortid }, { $push: { visitHistory: { timestamp: Date.now() } } });
    res.redirect(entry.redirectURL);
}

module.exports = redirect;
