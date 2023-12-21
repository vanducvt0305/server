const express = require("express");
const app = express();
const port = 3000;
const rootRoute = require("./routes/rootRoute");

app.use("/", rootRoute);

app.listen(port, () => {
  console.log("Connected!!");
});
