import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/listadoAlumnos.css";

export default function ListadoAlumnos() {
  const [alumnos, setAlumnos] = useState([]);
  const [search, setSearch] = useState("");
  const [cursoFilter, setCursoFilter] = useState("todos");
  const [mensaje, setMensaje] = useState("");
  const [errores, setErrores] = useState([]);

  // 📍 Obtener alumnos
  const fetchAlumnos = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/alumnos");
      console.log("Alumnos recibidos:", res.data);
      setAlumnos(res.data.data || res.data); // Ajuste según API
    } catch (error) {
      console.error("Error al cargar alumnos:", error);
      setErrores([error.response?.data?.mensaje || "Error al cargar alumnos"]);
    }
  };

  useEffect(() => {
    fetchAlumnos();
  }, []);

  // 📍 Eliminar alumno
  const handleEliminar = async (id) => {
    if (!window.confirm("¿Seguro que deseas eliminar este alumno?")) return;

    try {
      const res = await axios.delete(`http://localhost:5000/api/alumnos/${id}`);
      setMensaje(res.data.mensaje || "Alumno eliminado correctamente");
      fetchAlumnos();
      setTimeout(() => setMensaje(""), 3000);
    } catch (error) {
      console.error("Error al eliminar alumno:", error);
      setErrores([error.response?.data?.mensaje || "Error al eliminar alumno"]);
    }
  };

  // Filtrar alumnos por búsqueda y curso
  const alumnosFiltrados = alumnos.filter((a) => {
    const matchSearch =
      a.nombre.toLowerCase().includes(search.toLowerCase()) ||
      a.apellido.toLowerCase().includes(search.toLowerCase());
    const matchCurso = cursoFilter === "todos" || a.curso === cursoFilter;
    return matchSearch && matchCurso;
  });

  return (
    <div className="listado-alumnos-container">
      <h2 className="neon-title">📡 Panel de Alumnos</h2>

      {mensaje && <p className="success-hud">{mensaje}</p>}
      {errores.length > 0 && (
        <ul className="errors-hud">
          {errores.map((err, i) => (
            <li key={i}>{err}</li>
          ))}
        </ul>
      )}

      <div className="filters-container">
        <input
          type="text"
          placeholder="Buscar por nombre o apellido..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
        <select
          value={cursoFilter}
          onChange={(e) => setCursoFilter(e.target.value)}
          className="curso-select"
        >
          <option value="todos">Todos los cursos</option>
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

      <div className="table-wrapper">
        <table className="cyberpunk-table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Correo</th>
              <th>Curso</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {alumnosFiltrados.length > 0 ? (
              alumnosFiltrados.map((alumno) => {
                const hoy = new Date().toDateString();
                const registradoHoy =
                  new Date(alumno.fechaRegistro).toDateString() === hoy;
                return (
                  <tr
                    key={alumno._id}
                    className={registradoHoy ? "highlight-today" : ""}
                  >
                    <td>{alumno.nombre}</td>
                    <td>{alumno.apellido}</td>
                    <td>{alumno.correo}</td>
                    <td>{alumno.curso}</td>
                    <td>
                      <button className="btn-edit" title="Editar">
                        ✏️
                      </button>
                      <button
                        className="btn-delete"
                        onClick={() => handleEliminar(alumno._id)}
                        title="Eliminar"
                      >
                        🗑️
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="5" style={{ textAlign: "center" }}>
                  No se encontraron alumnos
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
