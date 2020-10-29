const fetch = require('node-fetch')

const doRequest = async url => {
    let rawReturnValue = await fetch(url);
    let cleanReturnValue = await rawReturnValue.json();
    return cleanReturnValue;
  }


module.exports = doRequest;