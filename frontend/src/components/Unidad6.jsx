import "../styles/unidad6.css";
import { useState } from "react";
import { FaRobot, FaLightbulb, FaCode, FaBook, FaDesktop } from "react-icons/fa";

export default function Unidad6() {
  const [prompt, setPrompt] = useState("");
  const [resultado, setResultado] = useState("");
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [history, setHistory] = useState([]);

  const handlePromptChange = (e) => setPrompt(e.target.value);

  const handleRunPrompt = () => {
    const simulatedResult = `Resultado simulado para: "${prompt}"`;
    setResultado(simulatedResult);
    setHistory([simulatedResult, ...history]);
    setPrompt("");
  };

  const toggleAdvanced = () => setShowAdvanced(!showAdvanced);

  const openDocumentation = () => {
    window.open("https://openai.com/research", "_blank");
  };

  return (
    <div className="unidad6-container neon-bg">
      <h2 className="neon-glitch">Unidad 6 – IA Generativa</h2>

      {/* Qué es IA Generativa */}
      <section className="unidad6-section">
        <h3><FaRobot /> ¿Qué es la IA generativa?</h3>
        <p>
          La IA generativa es un tipo de inteligencia artificial capaz de crear contenido original
          a partir de datos de entrada, incluyendo texto, imágenes, música y código. Permite
          automatizar tareas creativas y generar soluciones innovadoras.
        </p>
      </section>

      {/* Tipos */}
      <section className="unidad6-section card-grid">
        <h3><FaLightbulb /> Tipos de IA Generativa</h3>
        <div className="cards">
          <div className="card">
            <h4>Lenguaje</h4>
            <p>Modelos como GPT o Bard generan texto, resúmenes, chatbots y asistencia educativa.</p>
          </div>
          <div className="card">
            <h4>Imágenes</h4>
            <p>DALL·E, MidJourney y Stable Diffusion crean imágenes a partir de descripciones textuales.</p>
          </div>
          <div className="card">
            <h4>Música y Audio</h4>
            <p>Generación de composiciones musicales o voces sintéticas.</p>
          </div>
          <div className="card">
            <h4>Video y Animación</h4>
            <p>Creación de animaciones o clips cortos con IA.</p>
          </div>
        </div>
      </section>

      {/* Herramientas populares */}
      <section className="unidad6-section card-grid">
        <h3><FaCode /> Herramientas populares</h3>
        <div className="cards">
          <div className="card">
            <h4>ChatGPT</h4>
            <p>Generación de texto inteligente para asistentes virtuales y contenido creativo.</p>
          </div>
          <div className="card">
            <h4>GitHub Copilot</h4>
            <p>Asistente de programación que ayuda a generar código en tiempo real.</p>
          </div>
          <div className="card">
            <h4>DALL·E</h4>
            <p>Genera imágenes a partir de descripciones textuales.</p>
          </div>
          <div className="card">
            <h4>Otros</h4>
            <p>MidJourney, Stable Diffusion, Bard.</p>
          </div>
        </div>
      </section>

      {/* Beneficios y Limitaciones */}
      <section className="unidad6-section">
        <h3><FaDesktop /> Beneficios y Limitaciones</h3>
        <ul>
          <li>Agiliza la creación de contenido y prototipos.</li>
          <li>Asiste en tareas creativas y análisis de datos.</li>
          <li>Limitaciones: sesgos, errores inesperados y dependencia tecnológica.</li>
        </ul>
      </section>

      {/* Simulación práctica */}
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
        {history.length > 0 && (
          <div className="history">
            <h4>Historial de prompts</h4>
            <ul>
              {history.map((res, index) => (
                <li key={index}>{res}</li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {/* Contenido avanzado */}
      <section className="unidad6-section">
        <button onClick={toggleAdvanced} className="advanced-toggle">
          {showAdvanced ? "Ocultar contenido avanzado" : "Mostrar contenido avanzado"}
        </button>
        {showAdvanced && (
          <div className="advanced-section">
            <h3>Casos de uso avanzados</h3>
            <ul>
              <li>Generación de prototipos de productos</li>
              <li>Optimización de procesos creativos en marketing</li>
              <li>Asistencia en investigación científica</li>
              <li>Automatización de tareas de programación repetitivas</li>
              <li>Creación de contenido multimedia personalizado</li>
              <li>Análisis predictivo y simulaciones avanzadas</li>
            </ul>
          </div>
        )}
      </section>

      {/* Documentación */}
      <section className="unidad6-section">
        <button onClick={openDocumentation} className="doc-button">
          <FaBook /> Abrir documentación detallada
        </button>
      </section>

      {/* Recursos adicionales */}
      <section className="unidad6-section">
        <h3>Recursos adicionales</h3>
        <ul>
          <li><a href="https://www.deeplearning.ai/" target="_blank">DeepLearning.AI</a></li>
          <li><a href="https://huggingface.co/" target="_blank">Hugging Face</a></li>
          <li><a href="https://www.tensorflow.org/" target="_blank">TensorFlow</a></li>
        </ul>
      </section>
    </div>
  );
}
