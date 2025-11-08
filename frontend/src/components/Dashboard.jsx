import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "../styles/dashboard.css";

export default function Dashboard() {
  const [alumnos, setAlumnos] = useState([]);
  const [totalAlumnos, setTotalAlumnos] = useState(0);
  const [alumnosHoy, setAlumnosHoy] = useState(0);
  const [alumnosPorCurso, setAlumnosPorCurso] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAlumnos = useCallback(async () => {
    console.log("Iniciando fetch de alumnos...");
    setLoading(true);
    setError(null);

    try {
      const res = await axios.get("http://localhost:5000/api/alumnos", {
        timeout: 8000,
      });
      console.log("Respuesta de la API:", res.data);

      const data = Array.isArray(res.data.data) ? res.data.data : [];
      console.log("Datos procesados (Array final):", data);

      setAlumnos(data);
      setTotalAlumnos(data.length);

      const hoy = new Date().toDateString();
      const registradosHoy = data.filter((a) => {
        if (!a.fechaRegistro) return false;
        const fecha = new Date(a.fechaRegistro).toDateString();
        return fecha === hoy;
      });
      setAlumnosHoy(registradosHoy.length);

      const porCurso = data.reduce((acc, a) => {
        const cursoKey = a.curso || "N/A";
        acc[cursoKey] = (acc[cursoKey] || 0) + 1;
        return acc;
      }, {});
      setAlumnosPorCurso(porCurso);

      console.log("Total alumnos:", data.length);
      console.log("Alumnos registrados hoy:", registradosHoy.length);
      console.log("Distribución por curso:", porCurso);
    } catch (err) {
      console.error("Error al obtener alumnos:", err);
      setError("No se pudo conectar con la API. Intenta recargar.");
      setAlumnos([]);
      setTotalAlumnos(0);
      setAlumnosHoy(0);
      setAlumnosPorCurso({});
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchAlumnos();
  }, [fetchAlumnos]);

  if (loading)
    return (
      <div className="dashboard-container">
        <h1 className="neon-title">Cargando métricas...</h1>
      </div>
    );

  if (error)
    return (
      <div className="dashboard-container">
        <h1 className="neon-title">Error al cargar datos</h1>
        <p>{error}</p>
        <button onClick={fetchAlumnos}>Reintentar</button>
      </div>
    );

  // Calcular porcentaje para HUD bars
  const maxAlumnos = Math.max(totalAlumnos, 1);
  const maxHoy = Math.max(alumnosHoy, 1);
  const maxCurso = Math.max(...Object.values(alumnosPorCurso), 1);

  return (
    <div className="dashboard-container">
      <h1 className="neon-title">Dashboard Cyberpunk</h1>

      {/* --- Métricas principales con HUD --- */}
      <div className="dashboard-metrics">
        <div className="metric-card">
          <h3>Total Alumnos</h3>
          <div className="metric-value">{totalAlumnos}</div>
          <div className="hud-bar">
            <div
              className="hud-fill neon-cyan"
              style={{ width: `${(totalAlumnos / maxAlumnos) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="metric-card">
          <h3>Alumnos Hoy</h3>
          <div className="metric-value">{alumnosHoy}</div>
          <div className="hud-bar">
            <div
              className="hud-fill neon-pink"
              style={{ width: `${(alumnosHoy / maxHoy) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="metric-card">
          <h3>Distribución por Cursos</h3>
          <ul className="curso-list">
            {Object.entries(alumnosPorCurso).map(([curso, count]) => (
              <li key={curso}>
                {curso}: {count}
                <div className="hud-bar mini">
                  <div
                    className="hud-fill neon-yellow"
                    style={{
                      width: `${(count / maxCurso) * 100}%`,
                    }}
                  ></div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="metric-card">
          <h3>Total Datos</h3>
          <div className="metric-value">{alumnos.length}</div>
          <div className="hud-bar">
            <div
              className="hud-fill neon-green"
              style={{ width: `${(alumnos.length / maxAlumnos) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* --- Tabla de alumnos --- */}
      <div className="chart-container">
        <h2 className="neon-title" style={{ fontSize: "1.8rem" }}>
          Lista de Alumnos
        </h2>
        <table className="cyber-table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Correo</th>
              <th>Curso</th>
              <th>Fecha Registro</th>
            </tr>
          </thead>
          <tbody>
            {alumnos.map((a) => {
              const isToday =
                new Date(a.fechaRegistro).toDateString() ===
                new Date().toDateString();
              return (
                <tr key={a._id} className={isToday ? "highlight-today" : ""}>
                  <td>{a.nombre}</td>
                  <td>{a.apellido}</td>
                  <td>{a.correo}</td>
                  <td>{a.curso}</td>
                  <td>
                    {new Date(a.fechaRegistro).toLocaleString("es-AR")}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <button onClick={fetchAlumnos} style={{ marginTop: "2rem" }}>
        Refrescar Datos
      </button>
    </div>
  );
}
