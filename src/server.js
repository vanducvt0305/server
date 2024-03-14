import express from "express";
import rootRoute from "./routes/index.js";
import mongoose from "mongoose";
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const port = 3591;

app.listen(port, () => {
  console.log(`Server running at https://localhost:${port}`);
});

const mongoDBUri =
  "mongodb+srv://vanducvt0305:Thienkim1!@cluster0.cencou3.mongodb.net/UserData?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(mongoDBUri)
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

app.use(rootRoute);
