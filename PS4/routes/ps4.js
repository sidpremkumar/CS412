const express = require('express');
const https = require('https')
const router = express.Router();

// API used: https://documenter.getpostman.com/view/10808728/SzS8rjbc

router.post('/', function(req, res, next) {
    // Get the name of the coutnry we're looking at
    console.log(req.body)
    const countryName = req.body.country;
    

    // Make our API call
    // https://www.twilio.com/blog/2017/08/http-requests-in-node-js.html
    const url = 'https://api.covid19api.com/country/' + countryName + '/status/confirmed'
    https.get(url, (resp) => {
        let data = '';

        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
            data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            const dataFormatted = JSON.parse(data);
            const dataToday = dataFormatted[dataFormatted.length-1]
            res.render('ps4Response', { country: countryName, cases: dataToday.Cases});

        });

        }).on("error", (err) => {
            res.render('errorMessage');
    });
    
    
      
});

module.exports = router;

