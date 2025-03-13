import jwt from "jsonwebtoken";
import redisClient from "../services/redis.service.js";

export const authUser = async (req, res, next) => {
    try {
        const token = req.cookies.token || req.headers.authorization.split(' ')[1];
        if (!token) {
            return res.status(401).send({ error: 'Unauthorized User.' });
        }

        const isBlacklisted = await redisClient.get(token);

        if (isBlacklisted) {
            res.cookie('token', '');

            return res.status(401).send({ error: 'Unauthorized User.' });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (e) {
        res.status(401).send({ error: 'Unauthorized User.' });
        // console.log(e);
    }
};
// In the auth middleware, we first get the token from the Authorization header of the request. We then verify the token using the jwt.verify function from the jsonwebtoken package. If the token is valid, we decode the token and set the decoded value to the req.user property. We then call the next function to pass the request
