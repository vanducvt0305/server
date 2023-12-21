const mongoose = require('mongoose');

const usdtPairSchema = new mongoose.Schema({
  symbol: String,
  price: Number,
});

const UsdtPair = mongoose.model('UsdtPair', usdtPairSchema);

module.exports = UsdtPair;