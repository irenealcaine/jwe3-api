import express from "express";
import { getAllDinosaurs, getDinosaurBySlug } from "../services/dinosaurs.services.js";

const router = express.Router();

router.get("/", (req, res) => {
  const list = getAllDinosaurs();
  res.json(list);
});


router.get("/:slug", (req, res) => {
  const dino = getDinosaurBySlug(req.params.slug);
  if (dino) {
    res.json(dino);
  } else {
    res.status(404).json({ message: "Dinosaurio no encontrado (slug incorrecto)" });
  }
});

export default router;
