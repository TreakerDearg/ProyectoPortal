import Alumno from "../models/Alumno.js";

// 📍 Crear alumno
export const crearAlumno = async (req, res, next) => {
  try {
    const alumno = new Alumno(req.body);
    await alumno.save();
    res.status(201).json({
      success: true,
      mensaje: "Alumno registrado exitosamente",
      data: alumno,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      return res.status(400).json({ success: false, mensaje: error.message });
    }
    next(error);
  }
};

// 📍 Listar todos los alumnos
export const listarAlumnos = async (req, res, next) => {
  try {
    const alumnos = await Alumno.find().sort({ fechaRegistro: -1 });
    res.status(200).json({ success: true, data: alumnos });
  } catch (error) {
    next(error);
  }
};

// 📍 Obtener alumno por ID
export const obtenerAlumno = async (req, res, next) => {
  try {
    const alumno = await Alumno.findById(req.params.id);
    if (!alumno)
      return res.status(404).json({
        success: false,
        mensaje: "Alumno no encontrado",
      });
    res.status(200).json({ success: true, data: alumno });
  } catch (error) {
    next(error);
  }
};

// 📍 Actualizar alumno
export const actualizarAlumno = async (req, res, next) => {
  try {
    const alumno = await Alumno.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true, // valida el schema al actualizar
    });
    if (!alumno)
      return res.status(404).json({
        success: false,
        mensaje: "Alumno no encontrado",
      });
    res.status(200).json({
      success: true,
      mensaje: "Alumno actualizado correctamente",
      data: alumno,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      return res.status(400).json({ success: false, mensaje: error.message });
    }
    next(error);
  }
};

// 📍 Eliminar alumno
export const eliminarAlumno = async (req, res, next) => {
  try {
    const alumno = await Alumno.findByIdAndDelete(req.params.id);
    if (!alumno)
      return res.status(404).json({
        success: false,
        mensaje: "Alumno no encontrado",
      });
    res.status(200).json({
      success: true,
      mensaje: "Alumno eliminado correctamente",
    });
  } catch (error) {
    next(error);
  }
};
