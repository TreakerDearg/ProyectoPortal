import { useState } from "react";
import axios from "axios";
import "../styles/cargarAlumno.css";

export default function CargarAlumno() {
  const [alumno, setAlumno] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    curso: "1A",
  });

  const [mensaje, setMensaje] = useState("");
  const [errores, setErrores] = useState([]);

  // Validación de campos
  const validarCampo = (name, value) => {
    if (!value.trim()) return `${name} es obligatorio`;
    if (name === "nombre" && value.length < 2) return "Nombre demasiado corto";
    if (name === "apellido" && value.length < 2) return "Apellido demasiado corto";
    if (name === "correo" && !/.+@.+\..+/.test(value)) return "Correo inválido";
    return null;
  };

  // Manejo de cambios en inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAlumno({ ...alumno, [name]: value });

    const error = validarCampo(name, value);
    setErrores((prev) => {
      const filtered = prev.filter((err) => !err.startsWith(name));
      return error ? [...filtered, `${name}: ${error}`] : filtered;
    });
  };

  // Envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensaje("");
    setErrores([]);

    // Validación completa antes de enviar
    const validaciones = Object.entries(alumno)
      .map(([key, value]) => validarCampo(key, value))
      .filter(Boolean);

    if (validaciones.length) return setErrores(validaciones);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/alumnos",
        alumno,
        {
          headers: { "Content-Type": "application/json" },
          timeout: 5000, // tiempo máximo de espera
        }
      );

      // Confirmación exitosa
      if (res.status === 201 || res.status === 200) {
        setMensaje(res.data.mensaje || "Alumno registrado correctamente");
        setAlumno({ nombre: "", apellido: "", correo: "", curso: "1A" });
        setErrores([]);
      } else {
        setErrores([res.data.mensaje || "Error desconocido al registrar"]);
      }
    } catch (error) {
      if (error.response) {
        // Error devuelto por el backend
        const respErrores = error.response.data?.errores;
        setErrores(respErrores || [error.response.data?.mensaje || "Error al registrar alumno"]);
      } else if (error.request) {
        // Problema de conexión
        setErrores(["No se pudo conectar con el servidor. Verifica que esté activo."]);
      } else {
        // Otros errores
        setErrores([`Error inesperado: ${error.message}`]);
      }
    }
  };

  return (
    <div className="cargar-alumno-container">
      <h2>Cargar Alumno</h2>

      {mensaje && <p className="success">{mensaje}</p>}
      {errores.length > 0 && (
        <ul className="errors">
          {errores.map((err, i) => (
            <li key={i}>{err}</li>
          ))}
        </ul>
      )}

      <form className="cargar-alumno-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={alumno.nombre}
            onChange={handleChange}
            className={errores.some((e) => e.includes("nombre")) ? "error-input" : ""}
          />
        </div>

        <div className="input-group">
          <input
            type="text"
            name="apellido"
            placeholder="Apellido"
            value={alumno.apellido}
            onChange={handleChange}
            className={errores.some((e) => e.includes("apellido")) ? "error-input" : ""}
          />
        </div>

        <div className="input-group">
          <input
            type="email"
            name="correo"
            placeholder="Correo"
            value={alumno.correo}
            onChange={handleChange}
            className={errores.some((e) => e.includes("correo")) ? "error-input" : ""}
          />
        </div>

        <div className="input-group">
          <select name="curso" value={alumno.curso} onChange={handleChange}>
            <option value="1A">1A</option>
            <option value="1B">1B</option>
            <option value="2A">2A</option>
            <option value="2B">2B</option>
            <option value="3A">3A</option>
            <option value="3B">3B</option>
            <option value="4A">4A</option>
            <option value="4B">4B</option>
          </select>
        </div>

        <button type="submit" className="btn-submit">
          Registrar Alumno
        </button>
      </form>
    </div>
  );
}
