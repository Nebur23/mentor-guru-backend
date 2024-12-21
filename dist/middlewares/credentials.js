"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const allowedOrigins_1 = __importDefault(require("../utils/allowedOrigins"));
const credentials = (req, res, next) => {
    const origin = req.headers.origin;
    if (!origin || allowedOrigins_1.default.includes(origin)) {
        if (origin) {
            res.header("Access-Control-Allow-Origin", origin);
        }
        res.header("Access-Control-Allow-Credentials", "true");
        next();
    }
    else {
        res.status(403).send("Origin not allowed by CORS");
    }
};
exports.default = credentials;
