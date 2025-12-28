import express from "express";
import cors from "cors";
import dinosaurRoutes from "./src/routes/dinosaurs.routes.js";
import dietRoutes from "./src/routes/diets.routes.js";
import digRoutes from "./src/routes/dig.routes.js";
import familiesRoutes from "./src/routes/families.routes.js";
import habitatsRoutes from "./src/routes/habitats.routes.js";

const app = express();
app.use(cors());
app.use(express.json());

// 🔹 Servir archivos estáticos (HTML e imágenes)
app.use(express.static("public"));
app.use("/images", express.static("public/images"));

// 🔹 Rutas de la API
app.use("/api/dinosaurs", dinosaurRoutes);
app.use("/api/diets", dietRoutes);
app.use("/api/dig-sites", digRoutes);
app.use("/api/families", familiesRoutes);
app.use("/api/habitats", habitatsRoutes);

// 🔹 Arranque del servidor
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🦕 Servidor en marcha → http://localhost:${PORT}`);
});

