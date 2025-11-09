import { useState, useEffect } from "react";
import "../styles/unidad6.css";

export default function Unidad6() {
  const [prompt, setPrompt] = useState("");
  const [resultado, setResultado] = useState([]);
  const [logs, setLogs] = useState([]);
  const [running, setRunning] = useState(false);

  const handlePromptChange = (e) => setPrompt(e.target.value);

  const handleRunPrompt = () => {
    if (!prompt) return;

    const timestamp = new Date().toLocaleTimeString();
    setLogs((prev) => [`[${timestamp}] Ejecutando: "${prompt}"`, ...prev]);
    setRunning(true);

    let i = 0;
    const simulatedResult = `Resultado de IA: ${prompt.split("").reverse().join("")}`;
    setResultado([]);

    const typingEffect = setInterval(() => {
      i++;
      setResultado([simulatedResult.slice(0, i)]);
      if (i === simulatedResult.length) {
        clearInterval(typingEffect);
        setRunning(false);
      }
    }, 30);

    setPrompt("");
  };

  return (
    <div className="unidad6-container terminal">
      <h2 className="neon-title">[UNIDAD 6] IA Generativa</h2>

      {/* Sección de explicación */}
      <section className="unidad6-section terminal-section">
        <h3 className="section-title">¿Qué es la IA generativa?</h3>
        <p>
          Es un sistema capaz de generar contenido original a partir de datos: texto, imágenes, música o código.
          Automatiza tareas creativas sin reemplazar la inventiva humana.
        </p>
      </section>

      {/* Sección de herramientas activas */}
      <section className="unidad6-section terminal-section">
        <h3 className="section-title">Badges activos / Estado del sistema</h3>
        <div className="badges">
          <span className="badge active">GPT-4 ONLINE</span>
          <span className="badge active">Copilot READY</span>
          <span className="badge">DALL·E OFFLINE</span>
          <span className="badge">MidJourney READY</span>
        </div>
      </section>

      {/* Sección de tips */}
      <section className="unidad6-section terminal-section">
        <h3 className="section-title">Tips rápidos de prompts</h3>
        <ul>
          <li>Usa lenguaje claro y específico.</li>
          <li>Divide tareas complejas en pasos.</li>
          <li>Prueba variaciones para mejores resultados.</li>
        </ul>
      </section>

      {/* Sección de simulación terminal */}
      <section className="unidad6-section terminal-section">
        <h3 className="section-title">Simulación Terminal</h3>
        <input
          className="terminal-input"
          value={prompt}
          onChange={handlePromptChange}
          placeholder="Escribe un prompt de IA..."
        />
        <button className="terminal-btn" onClick={handleRunPrompt} disabled={running}>
          {running ? "IA Corriendo..." : "Ejecutar"}
        </button>

        <div className="terminal-output">
          {resultado.map((line, idx) => (
            <p key={idx}>{line}</p>
          ))}
        </div>

        <div className="terminal-logs">
          {logs.map((log, idx) => (
            <p key={idx} className="log-line">{log}</p>
          ))}
        </div>
      </section>

      {/* Sección de documentación */}
      <section className="unidad6-section terminal-section">
        <button
          className="doc-button"
          onClick={() => window.open("https://openai.com/research", "_blank", "noreferrer")}
        >
          Abrir documentación detallada
        </button>
      </section>
    </div>
  );
}
