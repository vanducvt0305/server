const express = require("express");
const rootRoute = express.Router();
const { getPriceRoute } = require("./getPriceRoute");

rootRoute.use("/", getPriceRoute);

module.exports = rootRoute;
