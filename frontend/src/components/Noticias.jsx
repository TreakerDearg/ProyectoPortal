// src/components/Noticias.jsx
import React from "react";
import "../styles/noticias.css";

export default function Noticias() {
  // Noticias de ejemplo
  const noticias = [
    {
      id: 1,
      titulo: "Inicio del nuevo semestre",
      fecha: "2025-11-07",
      contenido: "El nuevo semestre ha comenzado oficialmente. Bienvenidos a todos los estudiantes.",
      etiqueta: "NOVEDAD",
      prioridad: "alta",
    },
    {
      id: 2,
      titulo: "Actualización de cursos",
      fecha: "2025-11-06",
      contenido: "Se han actualizado los planes de estudio para los cursos de 2B y 3A.",
      etiqueta: "INFO",
      prioridad: "media",
    },
    {
      id: 3,
      titulo: "Eventos próximos",
      fecha: "2025-11-05",
      contenido: "No te pierdas la feria de tecnología que se realizará el próximo viernes.",
      etiqueta: "EVENTO",
      prioridad: "alta",
    },
    {
      id: 4,
      titulo: "Hackathon Estudiantil",
      fecha: "2025-11-04",
      contenido: "Se abre la inscripción para el Hackathon de Innovación Tecnológica.",
      etiqueta: "ALERTA",
      prioridad: "alta",
    },
    {
      id: 5,
      titulo: "Concurso de Robótica",
      fecha: "2025-11-03",
      contenido: "Participa en el concurso de robótica y muestra tus habilidades de programación.",
      etiqueta: "EVENTO",
      prioridad: "media",
    },
    {
      id: 6,
      titulo: "Actualización de la Plataforma Virtual",
      fecha: "2025-11-02",
      contenido: "Se ha actualizado la plataforma de cursos en línea con nuevas funcionalidades.",
      etiqueta: "NOVEDAD",
      prioridad: "baja",
    },
  ];

  return (
    <div className="noticias-panel">
      {/* Ticker cyberpunk */}
      <div className="noticias-ticker">
        <div className="ticker-content">
          {noticias.map((n) => (
            <span key={n.id} className={`ticker-item prioridad-${n.prioridad}`}>
              [{n.etiqueta}] {n.titulo} &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            </span>
          ))}
        </div>
      </div>

      <h2 className="panel-title">🖥️ Noticias del Instituto</h2>

      <div className="noticias-grid">
        {noticias.map((noticia) => (
          <div
            key={noticia.id}
            className={`noticia-card prioridad-${noticia.prioridad}`}
          >
            <div className="noticia-header">
              <span className="noticia-etiqueta">{noticia.etiqueta}</span>
              <span className="noticia-fecha">{new Date(noticia.fecha).toLocaleDateString()}</span>
            </div>
            <h3 className="noticia-titulo">{noticia.titulo}</h3>
            <p className="noticia-contenido">{noticia.contenido}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
