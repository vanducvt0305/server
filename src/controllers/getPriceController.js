const axios = require("axios");
const UsdtPair = require('../models/usdtPair');


const getPriceController = async (req, res) => {
  try {
    const response = await axios.get('https://api.binance.com/api/v3/ticker/price');
    const usdtPairsWithPrices = response.data
      .filter((pair) => pair.symbol.endsWith('USDT'))
      .map((pair) => ({
        symbol: pair.symbol,
        price: parseFloat(pair.price),
      }));
    
    // Lưu dữ liệu vào MongoDB
    await UsdtPair.insertMany(usdtPairsWithPrices);

    console.log('Dữ liệu đã được lưu vào MongoDB');

    // Trả về dữ liệu cho client nếu cần
    res.json({ message: 'Dữ liệu đã được lưu thành công' ,data:usdtPairsWithPrices});

    // Thực hiện các xử lý khác tại đây
  } catch (error) {
    console.error('Error:', error.message);
    // Trả về lỗi cho client nếu cần
    res.status(500).json({ error: 'Có lỗi xảy ra' });
  }
};
module.exports = { getPriceController };