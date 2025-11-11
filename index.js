import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Datos iniciales
const dinosaurs = [
  {
    id: 1,
    name: "Tyrannosaurus Rex",
    image: "https://tuweb.com/images/trex.jpg",
    description: "Un gran carnívoro del Cretácico tardío, conocido por su poderosa mandíbula.",
  },
  {
    id: 2,
    name: "Triceratops",
    image: "https://tuweb.com/images/triceratops.jpg",
    description: "Herbívoro con tres cuernos y un gran escudo óseo en la cabeza.",
  },
];

// Ruta principal
app.get("/", (req, res) => {
  res.send("🦖 Bienvenida a la API de Jurassic World Evolution 3");
});

// Ruta de dinosaurios
app.get("/api/dinosaurs", (req, res) => {
  res.json(dinosaurs);
});

app.listen(3000, () => {
  console.log("Servidor en marcha → http://localhost:3000");
});
