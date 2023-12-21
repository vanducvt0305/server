const express = require('express');
const getPriceApiRoute = express.Router()
const {getPriceApiController} = require('../controllers/getPriceApiController')

getPriceApiRoute.get('/getpriceapi',getPriceApiController)

module.exports = {getPriceApiRoute}
