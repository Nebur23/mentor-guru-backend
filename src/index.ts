import express, { Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import logger from "./utils/logger";
import connectDB from "./config/db";
import paper from "./routes/paperRoutes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript Express!");
});

app.use("/api/paper", paper);

// Start server
app.listen(PORT, () => {
  logger.info(`App is running at http://localhost:${PORT}`);
  // connect to the database
  connectDB();
});
