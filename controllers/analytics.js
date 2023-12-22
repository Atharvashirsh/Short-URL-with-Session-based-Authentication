//* Require the URL Model(i.e our database)
const URL = require("../models/url");

async function getAnalytics(req, res) {
    const shortid = req.params.shortid;
    const result = await URL.findOne({ shortId: shortid });
    return res.json({ totalClicks: result.visitHistory.length, analytics: result.visitHistory });
}

module.exports = getAnalytics;
