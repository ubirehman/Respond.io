const { createClient } = require('redis');
require("dotenv").config();

class Cache {
    constructor(client) {
        this.client = client;
    }
}

const redisClient = createClient({
    socket: {
        host:  process.env.REDIS_HOST, 
        port: 14231
    },
    password: process.env.REDIS_PASSWORD
});

redisClient.on('connect', () => {
    console.log('Redis client connected successfully');
});

redisClient.on('error', (err) => {
    console.error('Redis client connection error:', err);
});

redisClient.connect();

const cache = new Cache(redisClient);
Object.freeze(cache);
module.exports = cache;