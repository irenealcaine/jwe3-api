import express from "express";
import { dinosaurs } from "../data/dinosaurs.js";

const router = express.Router();

// Campos que queremos mostrar en la lista (resumen)
const briefFields = [
  "id",
  "name",
  "slug",
  "image",
  "era",
  "description",
  "diet"
];

function pick(obj, keys) {
  const out = {};
  keys.forEach(k => {
    if (Object.prototype.hasOwnProperty.call(obj, k)) out[k] = obj[k];
  });
  return out;
}

router.get("/", (req, res) => {
  // Por defecto devolvemos solo un resumen de cada dinosaurio
  const list = dinosaurs.map(d => pick(d, briefFields));
  res.json(list);
});

router.get("/:id", (req, res) => {
  const dino = dinosaurs.find(d => d.id === parseInt(req.params.id));
  if (dino) res.json(dino);
  else res.status(404).json({ message: "Dinosaurio no encontrado" });
});

export default router;
