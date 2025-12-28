import express from "express";
import { getAllHabitats } from "../services/habitats.services.js";

const router = express.Router();

router.get("/", (req, res) => {
  const list = getAllHabitats();
  res.json(list);
});


export default router;
