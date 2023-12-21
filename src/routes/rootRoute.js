const express = require("express");
const rootRoute = express.Router();
const { getPriceRoute } = require("./getPriceRoute");
const {streamPricesRoute} =require('./streamPricesRoute')

rootRoute.use("/", getPriceRoute);
rootRoute.use('/',streamPricesRoute)

module.exports = rootRoute;







