"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const paper_1 = require("../model/paper");
class PaperController {
    async addPaper(req, res) {
        const { name, category, url, paper, year } = req.body;
        if (!name || !category || !url || !paper || !year) {
            return res.status(400).json({ message: "Missing required parameters" });
        }
        try {
            const existingPaper = await paper_1.paperModel.findOne({ url });
            if (existingPaper) {
                return res.status(400).json({ message: "Paper already exists" });
            }
            const newPaper = new paper_1.paperModel({
                name,
                category,
                url,
                paper,
                year,
            });
            await newPaper.save();
            return res.status(201).json({ message: "Paper added successfully" });
        }
        catch (error) {
            console.error("Error adding paper:", error);
            return res.status(500).json({ message: "Internal server error" });
        }
    }
    async getPapers(req, res) {
        const ITEMS_PER_PAGE = 8;
        const { category, name, currentPage } = req.query;
        const page = Number(currentPage) || 1;
        const offset = (page - 1) * ITEMS_PER_PAGE;
        try {
            const filters = {};
            if (name)
                filters.name = { $regex: name, $options: "i" }; // Case-insensitive search
            if (category)
                filters.category = category;
            // Count documents with filters
            const totalPapers = await paper_1.paperModel.countDocuments(filters);
            const totalPages = Math.ceil(totalPapers / ITEMS_PER_PAGE);
            const papers = await paper_1.paperModel
                .find(filters);
            //.skip(offset)
            //.limit(ITEMS_PER_PAGE);
            if (!papers || papers.length === 0) {
                res.status(404).json({ message: "No papers found" });
                return;
            }
            res.status(200).json({ papers, totalPages });
        }
        catch (error) {
            console.error("Error getting papers:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    }
}
exports.default = new PaperController();
