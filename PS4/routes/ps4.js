const express = require('express');
const router = express.Router();
const config = require("../config.json");
const doRequest = require('./doRequest.js');


// API used: https://documenter.getpostman.com/view/10808728/SzS8rjbc


router.post('/', function(req, res, next) {
    // Get the name of the coutnry we're looking at
    const countryName = req.body.country;
    

    // Make our API call
    // https://www.twilio.com/blog/2017/08/http-requests-in-node-js.html
    const url = config.countryEndpoint.replace("COUNTRYNAME", countryName);

    doRequest(url).then(response => {
        // Show the response to the user
        const dataToday = response[response.length-1]
        res.render('ps4Response', { country: countryName, cases: dataToday.Cases});
      }).catch(err => {
        res.render('errorMessage', {error, err});
      })
});

module.exports = router;

