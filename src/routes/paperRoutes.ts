import express from "express";
import paperController from "../controllers/paperController";

const paper = express.Router();

paper.get("/", paperController.getPapers);

export default paper;
