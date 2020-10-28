const express = require('express');
const router = express.Router();
const https = require('https')
const config = require("../config.json");

/* GET home page. */
router.get('/', function(req, res, next) {
  // Get all the countries
  const url = config.countriesEndpoint
  https.get(url, (resp) => {
    let data = '';

    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
        data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
        const dataFormatted = JSON.parse(data);
        let countries = []
        for (country in dataFormatted){
          countries.push({'Country': dataFormatted[country].Country, 'Slug': dataFormatted[country].Slug})
        }
        // Display all countries as an option to the user 
        res.render('index', { countries: countries });
    });

    }).on("error", (err) => {
        res.render('errorMessage');
});

  
});

module.exports = router;
