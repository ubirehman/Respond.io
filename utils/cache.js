const redis = require("redis");
require("dotenv").config();

class Cache {
    constructor(client) {
        this.client = client;
    }
}

const redisClient = redis.createClient({
    url: process.env.REDIS_URL,
});

redisClient.connect();

const cache = new Cache(redisClient);
Object.freeze(cache);
module.exports = cache;