import express from "express";
import cors from "cors";
import dinosaurRoutes from "./src/routes/dinosaurs.routes.js";

const app = express();
app.use(cors());
app.use(express.json());

// 🔹 Servir archivos estáticos (HTML e imágenes)
app.use(express.static("public"));
app.use("/images", express.static("public/images"));

// 🔹 Rutas de la API
app.use("/api/dinosaurs", dinosaurRoutes);

// 🔹 Arranque del servidor
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🦕 Servidor en marcha → http://localhost:${PORT}`);
});

