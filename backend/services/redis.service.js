import e from "express";
import Redis from "ioredis";

const redisClient = new Redis({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  password: process.env.REDIS_PASSWORD,
});
// above 3 will be used to connect to the redis server successfully..they are provided in .env file 

redisClient.on("connect", () => {
  console.log("Connected to Redis Server");
}
);

export default redisClient;