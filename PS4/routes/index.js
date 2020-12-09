const express = require("express");
const router = express.Router();
const config = require("../config.json");
const doRequest = require("./doRequest.js");

/* GET home page. */
router.get("/", function (req, res, next) {
  // Get all the countries
  const url = config.countriesEndpoint;
  doRequest(url)
    .then((response) => {
      // The whole response has been received. Print out the result.
      let countries = [];
      for (country in response) {
        countries.push({
          Country: response[country].Country,
          Slug: response[country].Slug,
        });
      }
      // Display all countries as an option to the user
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", true);
      res.header("Access-Control-Allow-Credentials", true);
      res.header(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE"
      );
      res.json({ response: countries });
    })
    .catch((err) => {
      res.render("errorMessage", { error: err });
    });
});

module.exports = router;
