
const WebSocket = require('ws');
const UsdtPair = require('../models/usdtPair');

const streamPricesController = (req, res) => {
  // WebSocket connection to Binance stream
  const binanceStream = new WebSocket('wss://stream.binance.com:9443/ws/!ticker@arr');

  // binanceStream.on('open', () => {
  //   console.log('WebSocket connected to Binance stream');
  // });

  binanceStream.on('message', async (data) => {
    try {
      const tickers = JSON.parse(data);

      // Lọc chỉ các cặp giá với USDT và giữ lại thông tin về ticker và giá
      const usdtTickers = tickers
        .filter((ticker) => ticker.s.includes('USDT'))
        .map(({ s: symbol, c: price }) => ({ symbol, price }));

      const updatePrices = usdtTickers.map(({ symbol, price }) => ({
        updateOne: {
          filter: { symbol, price: { $ne: price } },
          update: { $set: { price } },
          upsert: true,
        },
      }));
      //Thực hiện cập nhật vào cơ sở dữ liệu
      const result = await UsdtPair.bulkWrite(updatePrices);
    

      //Kiểm tra xem có bản ghi nào được cập nhật không
      if (result.modifiedCount > 0 || result.upsertedCount > 0) {
        console.log('Dữ liệu đã được cập nhật hoặc thêm mới trong MongoDB');
      }

      if (!res.headersSent) {
        res.json({ message: 'Dữ liệu đã được cập nhật hoặc thêm mới' ,data:updatePrices});

      }
    } catch (error) {
      console.error('Lỗi khi xử lý dữ liệu:', error.message);
      if (!res.headersSent) {
        res.status(500).json({ error: 'Có lỗi xảy ra' });
      }
    }
  });

  // Handle WebSocket errors
  binanceStream.on('error', (error) => {
    console.error('WebSocket error:', error);
  });

  // Gracefully handle process termination
  process.on('SIGINT', () => {
    console.log('Closing WebSocket connection.');
    binanceStream.close();
    process.exit();
  });
};

module.exports = {streamPricesController};


