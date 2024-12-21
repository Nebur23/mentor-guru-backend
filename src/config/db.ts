// create a connection to our MongoDB database
import mongoose from "mongoose";
import logger from "../utils/logger";

const connectDB = async () => {
  try {
    await mongoose.connect(String(process.env.DB_URL) as string);
    logger.info("Successfully connected to database");
  } catch (error) {
    console.error(error);
    logger.info("database connection failed. exiting now...");
    process.exit(1);
  }
};

export default connectDB;
