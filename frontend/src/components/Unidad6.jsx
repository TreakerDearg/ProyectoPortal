import { useState, useCallback } from "react"; 
import * as Tone from 'tone';
import "../styles/carreras.css"; // Importar CSS externo

// Inicializar Synth de Tone.js
const synth = new Tone.PolySynth(Tone.Synth, {
  oscillator: { type: "square" },
  envelope: { attack: 0.005, decay: 0.1, sustain: 0.05, release: 0.1 }
}).toDestination();

const Unidad6 = () => {
  // --- Terminal Simulation State ---
  const [prompt, setPrompt] = useState("");
  const [resultado, setResultado] = useState([]);
  const [logs, setLogs] = useState([]);
  const [running, setRunning] = useState(false);
  
  // --- Generative Game State ---
  const [difficulty, setDifficulty] = useState("Fácil");
  const [missionType, setMissionType] = useState("Arte");
  const [missionResult, setMissionResult] = useState("");
  const [gameRunning, setGameRunning] = useState(false);

  // Métricas
  const [metrics] = useState({
    latencia: '120ms',
    tokens: '500k/s',
    fiabilidad: '99.99%',
    uptime: '1900d',
  });

  // Casos de Uso
  const useCases = [
    { title: "Generación de Código", icon: "<>", desc: "Estructuras, scripts y automatización de tests." },
    { title: "Creación de Arte", icon: "🎨", desc: "Imágenes de alta resolución y modelos 3D a partir de texto." },
    { title: "Diseño de Audio", icon: "🎵", desc: "Composición musical, efectos de sonido y voz sintética." },
    { title: "Escritura Creativa", icon: "📝", desc: "Artículos, guiones y resúmenes complejos." },
  ];

  // --- Generative Game Logic ---
  const generateMission = useCallback((diff, type) => {
    const subjects = {
        "Arte": ["Una criatura de la mitología nórdica en estilo low-poly", "Una estación espacial abandonada bajo una luna roja"],
        "Código": ["Un algoritmo de ordenamiento cuántico", "Una función que resuelva el problema del viajante"],
        "Música": ["Una sinfonía de jazz futurista", "Un beat techno que nunca termina"],
    };
    const objectives = {
        "Fácil": ["genera una imagen", "escribe un párrafo"],
        "Medio": ["optimiza la estructura", "desarrolla una secuencia"],
        "Difícil": ["re-imagina el concepto desde cero", "integra múltiples estilos sin fallar"],
    };
    const twists = {
        "Fácil": "El resultado debe parecer que fue creado por un niño de 5 años.",
        "Medio": "El resultado debe tener un error sutil que solo un experto notará.",
        "Difícil": "El sistema se sobrecarga y crea algo completamente inesperado.",
    };

    const baseSubject = subjects[type][Math.floor(Math.random() * subjects[type].length)];
    const objective = objectives[diff][Math.floor(Math.random() * objectives[diff].length)];
    const twist = twists[diff];

    return [
        `// MISIÓN: [${diff.toUpperCase()} - ${type.toUpperCase()}]`,
        `[TÍTULO]: ${baseSubject}`,
        `[OBJETIVO]: La IA debe ${objective} basado en el título.`,
        `[TORSIÓN]: Advertencia: ${twist}`
    ].join('\n');
  }, []);

  const handleGeneratePlot = useCallback(() => {
    if (gameRunning) return;
    synth.triggerAttackRelease("G4", "8n");
    setGameRunning(true);
    setMissionResult("");

    const finalResult = generateMission(difficulty, missionType);
    let i = 0;

    const typingEffect = setInterval(() => {
      i++;
      setMissionResult(finalResult.slice(0, i));
      if (i === finalResult.length) {
        clearInterval(typingEffect);
        setGameRunning(false);
        synth.triggerAttackRelease(["C5", "E5", "G5"], "4n");
      }
    }, 25);
  }, [gameRunning, difficulty, missionType, generateMission]);

  // --- Terminal Logic ---
  const handlePromptChange = useCallback((e) => setPrompt(e.target.value), []);

  const handleRunPrompt = useCallback(() => {
    if (!prompt || running) return;
    synth.triggerAttackRelease("C4", "8n");

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
        synth.triggerAttackRelease(["E4", "G4", "B4"], "4n");
      }
    }, 30);

    setPrompt("");
  }, [prompt, running]);

  return (
    <div className="unidad6-container">
      <h2 className="neon-title">[UNIDAD 6] IA Generativa</h2>

      {/* Explicación */}
      <section className="unidad6-section">
        <h3 className="section-title">¿Qué es la IA generativa?</h3>
        <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
          Es un sistema capaz de generar contenido original a partir de datos: texto, imágenes, música o código.
          Automatiza tareas creativas sin reemplazar la inventiva humana.
        </p>
      </section>

      {/* Juego Generativo */}
      <section className="unidad6-section">
        <h3 className="section-title">Generador de Misiones Creadoras (Game)</h3>
        <p className="text-gray-300 leading-relaxed text-sm mb-4">
          Simula la generación de un *prompt* complejo. Elige la **Dificultad** para aumentar la "torsión".
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mb-4 items-center">
          <select
            className="terminal-input terminal-select"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            disabled={gameRunning}
          >
            <option value="Fácil">Dificultad: Fácil (Control)</option>
            <option value="Medio">Dificultad: Medio (Creatividad)</option>
            <option value="Difícil">Dificultad: Difícil (Impredecible)</option>
          </select>

          <select
            className="terminal-input terminal-select"
            value={missionType}
            onChange={(e) => setMissionType(e.target.value)}
            disabled={gameRunning}
          >
            <option value="Arte">Tipo: Arte (Visual)</option>
            <option value="Código">Tipo: Código (Lógico)</option>
            <option value="Música">Tipo: Música (Audio)</option>
          </select>

          <button 
            className="terminal-btn" 
            onClick={handleGeneratePlot} 
            disabled={gameRunning}
          >
            {gameRunning ? "Generando..." : "Generar Misión"}
          </button>
        </div>

        <div className="game-output-box">
          <h4 className="text-xs text-yellow-400 uppercase mb-2">AI MISSION BRIEFING:</h4>
          {missionResult ? (
            <p className="output-line whitespace-pre-wrap">{missionResult}</p>
          ) : (
            <p className="output-placeholder">Ajusta los parámetros y genera la primera misión...</p>
          )}
        </div>
      </section>

      {/* Casos de Uso */}
      <section className="unidad6-section">
        <h3 className="section-title">Casos de Uso Clave</h3>
        <div className="use-case-grid">
          {useCases.map((item, index) => (
            <div key={index} className="use-case-card">
              <div className="use-case-icon">{item.icon}</div>
              <p className="use-case-title">{item.title}</p>
              <p className="use-case-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Arquitectura */}
      <section className="unidad6-section">
        <h3 className="section-title">Conceptos de Arquitectura</h3>
        <div className="architecture-concept">
          <p className="concept-title">Tokens</p>
          <p className="text-sm text-gray-400">Las unidades de lenguaje que los modelos procesan (palabras, subpalabras, caracteres). Cuantos más tokens, más memoria.</p>
        </div>
        <div className="architecture-concept">
          <p className="concept-title">Transformers</p>
          <p className="text-sm text-gray-400">La arquitectura neuronal dominante. Utiliza el mecanismo de **Atención** para priorizar partes importantes del input.</p>
        </div>
      </section>

      {/* Pipeline */}
      <section className="unidad6-section">
        <h3 className="section-title">Pipeline de Generación</h3>
        <div className="pipeline-container">
          <div className="pipeline-step">
            <span className="step-icon">{'<'}I{'>'}</span>
            <span className="step-label">INPUT (Prompt)</span>
          </div>
          <div className="pipeline-step">
            <span className="step-icon">🧠</span>
            <span className="step-label">MODELO (Procesamiento)</span>
          </div>
          <div className="pipeline-step">
            <span className="step-icon">{'<'}O{'>'}</span>
            <span className="step-label">OUTPUT (Resultado)</span>
          </div>
        </div>
      </section>

      {/* Métricas */}
      <section className="unidad6-section">
        <h3 className="section-title">Métricas Clave de IA</h3>
        <div className="metrics-grid">
          {Object.entries(metrics).map(([key, value]) => (
            <div key={key} className="metric-card">
              <p className="metric-value">{value}</p>
              <p className="metric-label">{key.toUpperCase().replace('_', ' ')}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Desafíos Éticos */}
      <section className="unidad6-section">
        <h3 className="section-title">Desafíos Éticos</h3>
        <ul className="challenge-list">
          <li className="challenge-item">
            <p className="challenge-title">Sesgo y Discriminación</p>
            <p className="challenge-description">Los modelos replican los prejuicios presentes en los datos de entrenamiento.</p>
          </li>
          <li className="challenge-item">
            <p className="challenge-title">Derechos de Autor (Copyright)</p>
            <p className="challenge-description">La generación de contenido plantea interrogantes sobre la propiedad intelectual de las fuentes.</p>
          </li>
          <li className="challenge-item">
            <p className="challenge-title">Desinformación y "Deepfakes"</p>
            <p className="challenge-description">Facilidad para crear contenido falso hiperrealista que afecta la confianza pública.</p>
          </li>
        </ul>
      </section>

      {/* Terminal */}
      <section className="unidad6-section">
        <h3 className="section-title">Simulación Terminal</h3>
        
        <div className="flex flex-col sm:flex-row gap-3 mb-4 items-center">
          <input
            className="terminal-input"
            value={prompt}
            onChange={handlePromptChange}
            placeholder={running ? "Procesando solicitud..." : "Escribe un prompt de IA..."}
            disabled={running}
            onKeyDown={(e) => { if (e.key === 'Enter' && !running) handleRunPrompt(); }}
          />
          <button 
            className="terminal-btn" 
            onClick={handleRunPrompt} 
            disabled={running}
          >
            {running ? "IA Corriendo..." : "Ejecutar"}
          </button>
        </div>

        <div className="terminal-output">
          <h4 className="text-xs text-yellow-400 uppercase mb-2">IA Output:</h4>
          {resultado.map((line, idx) => (
            <p key={`res-${idx}`} className="output-line">{line}</p>
          ))}
          {running && <p className="animate-pulse output-line">[_GENERATING_]</p>}
          {!running && resultado.length === 0 && <p className="output-placeholder">Esperando comando...</p>}
        </div>

        <div className="terminal-logs">
          <h4 className="text-xs text-blue-400 uppercase mb-2">System Logs:</h4>
          {logs.map((log, idx) => (
            <p key={`log-${idx}`} className="log-line">{log}</p>
          ))}
          {logs.length === 0 && <p className="text-gray-600">Awaiting user input...</p>}
        </div>
      </section>
      
      {/* Documentación */}
      <section className="unidad6-section pt-6 border-t border-gray-700 text-center">
        <button
          className="doc-button"
          onClick={() => window.open("https://openai.com/research", "_blank", "noreferrer")}
        >
          Abrir documentación detallada
        </button>
      </section>
    </div>
  );
};

export default Unidad6;
