const express = require("express");
const rootRoute = express.Router();
const { getPriceRoute } = require("./getPriceRoute");
const {streamPricesRoute} =require('./streamPricesRoute')
const {getPriceApiRoute} = require('./getPriceApiRoute')

rootRoute.use("/", getPriceRoute);
rootRoute.use('/',streamPricesRoute)
rootRoute.use('/',getPriceApiRoute)

module.exports = rootRoute;







