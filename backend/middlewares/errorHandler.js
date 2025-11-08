export const errorHandler = (err, req, res, next) => {
  console.error("⚠️ Error capturado:", err);

  if (err.name === "ValidationError") {
    const mensajes = Object.values(err.errors).map((val) => val.message);
    return res.status(400).json({
      success: false,
      mensaje: "Error de validación",
      errores: mensajes,
    });
  }

  res.status(500).json({
    success: false,
    mensaje: "Error interno del servidor",
    error: err.message,
  });
};
