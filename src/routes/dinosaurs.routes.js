import express from "express";
import { getAllDinosaurs, getDinosaurById } from "../services/dinosaur.services.js";

const router = express.Router();

router.get("/", (req, res) => {
  const list = getAllDinosaurs();
  res.json(list);
});

router.get("/:id", (req, res) => {
  const dino = getDinosaurById(req.params.id);
  if (dino) {
    res.json(dino);
  } else {
    res.status(404).json({ message: "Dinosaurio no encontrado" });
  }
});

export default router;
