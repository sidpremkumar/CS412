const fetch = require("node-fetch");

// Redis related stuff
const redis = require("redis");
const client = redis.createClient();
const { promisify } = require("util");

// Redis commands:
const asyncSet = promisify(client.set).bind(client);
const asyncGet = promisify(client.get).bind(client);
const asyncExists = promisify(client.exists).bind(client);
const asyncExpire = promisify(client.expire).bind(client);

// Flush the cashe
client.flushdb((err, response) => {
  if (err) {
    console.log("Error while flushing Redis cache!");
  }
});

const doRequest = async (url) => {
  // First compare against redis if we have cache saved
  // Using url as the key
  let match = await asyncExists(url);

  if (match) {
    // We have it saved in cache
    let cachedData = await asyncGet(url);

    // Convert it to JSON
    cachedData = JSON.parse(cachedData);

    // Add a tag saying its from cached
    cachedData["cached"] = true;

    // Return the cached data
    return cachedData;
  } else {
    // Else set in cache and return
    // First get the response
    let rawReturnValue = await fetch(url);
    let cleanReturnValue = await rawReturnValue.json();

    // Then set it in redis
    let data = await asyncSet(url, JSON.stringify(cleanReturnValue));

    // Set our experation time
    data = await asyncExpire(url, 80);

    // Add a tag saying its not from cached
    cleanReturnValue["cached"] = false;

    // Finally return
    return cleanReturnValue;
  }
};

module.exports = doRequest;
