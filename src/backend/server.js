import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Game from "./models/game.js";

const app = express();
app.use(cors());
app.use(express.json());

await mongoose.connect("mongodb://localhost:27017/games");

console.log("MongoDB connected");

// API route
app.get("/api/games", async (req, res) => {
  const games = await Game.find();
  res.json(games);
});

app.listen(5000, () => console.log("Backend running on port 5000"));
