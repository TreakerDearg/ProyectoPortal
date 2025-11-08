import "../styles/unidad6.css";
import { useState } from "react";

export default function Unidad6() {
  const [prompt, setPrompt] = useState("");
  const [resultado, setResultado] = useState("");

  const handlePromptChange = (e) => setPrompt(e.target.value);

  const handleRunPrompt = () => {
    // Aquí se podría simular una llamada a API de IA generativa
    setResultado(`Resultado simulado para el prompt: "${prompt}"`);
  };

  return (
    <div className="unidad6-container">
      <h2 className="neon-glitch">Unidad 6 – IA Generativa</h2>

      <section className="unidad6-section">
        <h3>¿Qué es la IA generativa?</h3>
        <p>
          La IA generativa es una rama de la inteligencia artificial capaz de crear contenido nuevo a partir de datos de entrada, ya sea texto, imágenes, música o código.
        </p>
      </section>

      <section className="unidad6-section">
        <h3>Herramientas populares</h3>
        <ul>
          <li>ChatGPT – generación de texto</li>
          <li>GitHub Copilot – asistencia de código</li>
          <li>DALL·E – generación de imágenes</li>
          <li>Otros: MidJourney, Stable Diffusion, Bard</li>
        </ul>
      </section>

      <section className="unidad6-section">
        <h3>Ejemplos de prompts</h3>
        <ul>
          <li>Generar código en JS para una API REST</li>
          <li>Crear un diseño web responsive en HTML/CSS</li>
          <li>Escribir un resumen de investigación científica</li>
        </ul>
      </section>

      <section className="unidad6-section">
        <h3>Análisis de una aplicación real</h3>
        <p>
          Por ejemplo, ChatGPT es un modelo de lenguaje que potencia aplicaciones como asistentes virtuales, chatbots educativos y generadores de contenido. Su integración permite automatizar tareas y asistir al usuario sin reemplazar la creatividad humana.
        </p>
      </section>

      <section className="unidad6-section">
        <h3>Reflexión ética</h3>
        <p>
          El uso responsable de la IA generativa requiere transparencia, cuidado con los datos y conciencia de sesgos. La IA potencia al desarrollador, pero no lo reemplaza si se usa de forma ética.
        </p>
      </section>

      <section className="unidad6-section prompt-simulation">
        <h3>Simulación práctica</h3>
        <input
          type="text"
          value={prompt}
          onChange={handlePromptChange}
          placeholder="Escribe un prompt para simular IA"
        />
        <button onClick={handleRunPrompt}>Ejecutar</button>
        {resultado && <div className="resultado-neon">{resultado}</div>}
      </section>
    </div>
  );
}
