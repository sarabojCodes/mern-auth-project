import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()


mongoose
  .connect(process.env.MONGO_URL)
  .then((s) => {
    console.log("Databse connected");
  }).catch(error=>{console.log(error.message)});

const app = express();

app.listen(3000, () => {
  console.log("SERVER CONNECTED");
});
