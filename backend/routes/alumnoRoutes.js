import express from "express";
import {
  crearAlumno,
  listarAlumnos,
  obtenerAlumno,
  actualizarAlumno,
  eliminarAlumno,
} from "../controllers/alumnoController.js";

const router = express.Router();

router.route("/")
  .post(crearAlumno)
  .get(listarAlumnos);

router.route("/:id")
  .get(obtenerAlumno)
  .put(actualizarAlumno)
  .delete(eliminarAlumno);

export default router;
