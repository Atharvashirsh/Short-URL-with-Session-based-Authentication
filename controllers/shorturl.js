//* Require the Nano ID module to generate short ID
const short_id = require("shortid");

//* Require the URL Model(i.e our database)
const URL = require("../models/url");

//* Create an async function to create short ID and insert into database
async function generateShortURL(req, res) {
    //* Get the provided URL from the body
    const body = req.body;

    //* Check if the given URL is a valid URL or not
    if (!body.url) {
        // Return status code 400(-> Bad Request) and a message in JSON format
        return res.status(400).json({ error: "URL not provided" });
    }

    //* Create an 8-digit short ID
    const shortid = short_id.generate();

    //* Add the shortid and the given URL to the database synchronously
    await URL.create({
        shortId: shortid,
        redirectURL: body.url,
        visitHistory: [],
    });

    //* Return the user to the home page
    return res.render("home", { id: shortid });
}

//* Export the function
module.exports = generateShortURL;
