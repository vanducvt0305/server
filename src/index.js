const express = require("express");
const app = express();
const port = 3000;
const rootRoute = require("./routes/rootRoute");
const mongoose = require('mongoose')

app.use("/", rootRoute);
//Tạo kết nối đến MongoDB 
const connectToDatabase = async () => {
    try {
      await mongoose.connect('mongodb://127.0.0.1:27017/usdtpairs', {
       // useNewUrlParser: true, // Bạn có thể giữ hoặc bỏ qua tùy chọn này
      //  useUnifiedTopology: true, // Bạn có thể giữ hoặc bỏ qua tùy chọn này
      });
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
    }
  };
  
  // Gọi hàm kết nối đến MongoDB
  connectToDatabase();
app.listen(port, () => {
  console.log("Connected!!");
});

