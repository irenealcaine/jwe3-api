import express from "express";
import { getAllDiets } from "../services/diets.services.js";

const router = express.Router();

router.get("/", (req, res) => {
  const list = getAllDiets();
  res.json(list);
});


export default router;
