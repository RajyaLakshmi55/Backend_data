import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database.js";

dotenv.config();
const app = express();

app.use(express.json());

const  PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    connectDB();
    console.log(`server is running on ${PORT}`); 
  });
  
