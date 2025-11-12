import express from "express";
import { dinosaurs } from "../data/dinosaurs.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json(dinosaurs);
});

router.get("/:id", (req, res) => {
  const dino = dinosaurs.find(d => d.id === parseInt(req.params.id));
  if (dino) res.json(dino);
  else res.status(404).json({ message: "Dinosaurio no encontrado" });
});

export default router;
