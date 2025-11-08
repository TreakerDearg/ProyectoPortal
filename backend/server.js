import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import alumnoRoutes from "./routes/alumnoRoutes.js";
import { errorHandler } from "./middlewares/errorHandler.js";

dotenv.config();
const app = express();

// Middlewares base
app.use(cors());
app.use(express.json());

// Conectar a la base de datos
connectDB();

// Rutas
app.use("/api/alumnos", alumnoRoutes);

// Ruta base
app.get("/", (req, res) => {
  res.send("Servidor backend operativo 🚀");
});

// Middleware global de errores
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Servidor ejecutándose en el puerto ${PORT}`));
