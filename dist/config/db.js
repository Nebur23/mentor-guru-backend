"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// create a connection to our MongoDB database
const mongoose_1 = __importDefault(require("mongoose"));
const logger_1 = __importDefault(require("../utils/logger"));
const connectDB = async () => {
    try {
        await mongoose_1.default.connect(String(process.env.DB_URL));
        logger_1.default.info("Successfully connected to database");
    }
    catch (error) {
        console.error(error);
        logger_1.default.info("database connection failed. exiting now...");
        process.exit(1);
    }
};
exports.default = connectDB;
