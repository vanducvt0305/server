const express = require('express');
const getPriceRoute = express.Router()
const {getPriceController} = require('../controllers/getPriceController')

getPriceRoute.get('/getPrice',getPriceController)

module.exports = {getPriceRoute}