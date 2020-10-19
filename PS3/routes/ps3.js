var express = require('express');
var router = express.Router();

/* GET ps3. */
router.get('/', function(req, res, next) {
  // Return our render pug template
  res.render('ps3', { stringToDisplay: 'Hey Now!' });
});

/* GET ps3. */
router.post('/', function(req, res, next) {
  // Grab our string from the requests and calculate its length
  let newString = req.body.stringParam
  if (newString == undefined) {
    // If the user did not pass in the stringParam in the body, return an error
    res.render('ps3Error')
    return
  }

  // Else calculate its length
  let lengthOfNewString = newString.length

  // Return and render it
  res.render('ps3Post', { stringToDisplay: newString, lengthOfNewString: lengthOfNewString });
});

module.exports = router;
