//* Require the URL Model(i.e our database)
const URL = require("../models/url");

//* Create the analytics function to get the Total clicks and Visit history on the short ID
async function getAnalytics(req, res) {
    //* Get the short ID from the parameter of the URL
    const shortid = req.params.shortid;

    const result = await URL.findOne({ shortId: shortid });
    return res.json({ totalClicks: result.visitHistory.length, analytics: result.visitHistory });
}

module.exports = getAnalytics;
