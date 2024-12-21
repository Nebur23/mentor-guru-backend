import { Request, Response, NextFunction } from "express";
import allowedOrigins from "../utils/allowedOrigins";

const credentials = (req: Request, res: Response, next: NextFunction) => {
  const origin = req.headers.origin as string | undefined;

  if (!origin || allowedOrigins.includes(origin)) {
    if (origin) {
      res.header("Access-Control-Allow-Origin", origin);
    }
    res.header("Access-Control-Allow-Credentials", "true");

    next();
  } else {
    res.status(403).send("Origin not allowed by CORS");
  }
};

export default credentials;
