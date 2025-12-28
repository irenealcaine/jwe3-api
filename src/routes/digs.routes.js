import express from "express";
import { getAllDigs } from "../services/digs.services.js";

const router = express.Router();

router.get("/", (req, res) => {
  const list = getAllDigs();
  res.json(list);
});


export default router;
