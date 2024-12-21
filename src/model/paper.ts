import mongoose, { Document, Schema } from "mongoose";

interface IPaper extends Document {
  name: string;
  category: string;
  url: string;
  paper: string;
  year: string;
}

const paperSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    category: { type: String, required: true },
    url: { type: String, required: true, unique: true },
    paper: { type: String, required: true },
    year: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const paperModel = mongoose.model<IPaper>("paper", paperSchema);

export { IPaper, paperModel };
