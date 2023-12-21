const UsdtPair = require('../models/usdtPair')
const mongoose = require('mongoose')

const getPriceApiController = async (req,res)=>{
    try {
        // Sử dụng find để lấy toàn bộ dữ liệu
        const data = await UsdtPair.find().select('symbol price -_id');
    
        // In dữ liệu ra console hoặc thực hiện các xử lý khác tùy ý
        res.json({Message:"Lấy dữ liệu thành công",data:data})
      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu:', error.message);
      } finally {
        // Đóng kết nối sau khi thực hiện xong
      }
}

module.exports = {getPriceApiController}