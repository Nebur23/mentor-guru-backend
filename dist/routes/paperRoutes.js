"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const paperController_1 = __importDefault(require("../controllers/paperController"));
const paper = express_1.default.Router();
paper.get("/", paperController_1.default.getPapers);
exports.default = paper;
