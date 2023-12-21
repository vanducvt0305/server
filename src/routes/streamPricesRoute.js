const express = require('express');
const streamPricesRoute = express.Router()
const {streamPricesController} = require('../controllers/streamPricesController')

streamPricesRoute.get('/streamprices',streamPricesController)

module.exports = {streamPricesRoute}