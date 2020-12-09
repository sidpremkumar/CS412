const express = require("express");
const router = express.Router();
const config = require("../config.json");
const doRequest = require("./doRequest.js");

// API used: https://documenter.getpostman.com/view/10808728/SzS8rjbc

router.options("/", function (req, res, next) {
  res.writeHead(200, {
    "Content-Type": "application/x-www-form-urlencoded",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Origin": "*",
  });
  res.end();
});

router.post("/", function (req, res, next) {
  // Get the name of the coutnry we're looking at
  const countryName = req.body.country;

  // Make our API call
  // https://www.twilio.com/blog/2017/08/http-requests-in-node-js.html
  const url = config.countryEndpoint.replace("COUNTRYNAME", countryName);

  doRequest(url)
    .then((response) => {
      // Show the response to the user
      const dataToday = response[response.length - 1];
      res.header("Access-Control-Allow-Origin", "*");
      res.header(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE"
      );
      data = {
        country: countryName,
        cases: dataToday.Cases,
        cached: response.cached,
      };
      res.json(data);
    })
    .catch((err) => {
      data = { country: countryName };
      res.json(data);
    });
});

module.exports = router;
