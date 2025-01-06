import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import router from "./routes/userRoute.js";
import cors from "cors";

const app = express();

// bodyParser is a middleware for parsing the JSON data
app.use(bodyParser.json());
app.use(cors());

dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL;

// Use the user route
app.use('/api/user', router);

// MongoDB connection and error handling
mongoose.connect(MONGO_URL)
  .then(() => {
    console.log("DB connected");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("DB connection failed", error);
    process.exit(1);  // Exit the process with failure code
  });
