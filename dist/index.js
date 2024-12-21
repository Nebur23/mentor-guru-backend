"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const logger_1 = __importDefault(require("./utils/logger"));
const db_1 = __importDefault(require("./config/db"));
const paperRoutes_1 = __importDefault(require("./routes/paperRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
// Middleware
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
// Routes
app.get("/", (req, res) => {
    res.send("Hello, TypeScript Express!");
});
app.use("/api/paper", paperRoutes_1.default);
// Start server
app.listen(PORT, () => {
    logger_1.default.info(`App is running at http://localhost:${PORT}`);
    // connect to the database
    (0, db_1.default)();
});
