import "../styles/carreras.css";

const carrerasData = [
  {
    title: "Desarrollo Web",
    description: "Aprendé a crear aplicaciones web modernas y escalables.",
    tags: ["Frontend", "Backend", "Fullstack"],
    popularity: 85,
  },
  {
    title: "Inteligencia Artificial",
    description: "Explorá el mundo de la IA aplicada a proyectos reales.",
    tags: ["Machine Learning", "Python", "Data Science"],
    popularity: 92,
  },
  {
    title: "Ciberseguridad",
    description: "Protegé sistemas y redes con herramientas de última generación.",
    tags: ["Redes", "Hacking Ético", "Pentesting"],
    popularity: 78,
  },
  {
    title: "Automatización Industrial",
    description: "Dominá la robótica y la automatización de procesos.",
    tags: ["PLC", "Robótica", "IoT"],
    popularity: 70,
  },
  {
    title: "Realidad Virtual",
    description: "Sumergite en mundos digitales y crea experiencias inmersivas.",
    tags: ["VR", "Unity", "Simulación"],
    popularity: 65,
  },
  {
    title: "Blockchain",
    description: "Aprendé a construir y proteger sistemas distribuidos.",
    tags: ["Criptografía", "Smart Contracts", "Ethereum"],
    popularity: 80,
  },
  {
    title: "Robótica Avanzada",
    description: "Diseñá robots autónomos y sistemas inteligentes.",
    tags: ["AI Robotics", "Control", "Autonomía"],
    popularity: 75,
  },
  {
    title: "Nanotecnología",
    description: "Explorá la ciencia de materiales y dispositivos a escala nano.",
    tags: ["Nano", "Materiales", "Innovación"],
    popularity: 60,
  },
];

function Tag({ text }) {
  return <span className="carrera-tag">{text}</span>;
}

function CarreraCard({ carrera }) {
  return (
    <div className="carrera-card">
      <div className="carrera-glow"></div>
      <h3 className="carrera-title">{carrera.title}</h3>
      <p className="carrera-description">{carrera.description}</p>
      <div className="carrera-tags">
        {carrera.tags.map((tag, idx) => (
          <Tag key={idx} text={tag} />
        ))}
      </div>
      <div className="carrera-hud">
        <div className="hud-bar">
          <div
            className="hud-fill"
            style={{ width: `${carrera.popularity}%` }}
          ></div>
        </div>
        <span className="hud-text">Popularidad: {carrera.popularity}%</span>
      </div>
      <button className="btn-industrial">Más Info</button>
    </div>
  );
}

export default function Carreras() {
  return (
    <section className="carreras-section">
      <h2 className="carreras-title">🖥️ Carreras Futuristas</h2>
      <div className="carreras-grid">
        {carrerasData.map((carrera, idx) => (
          <CarreraCard key={idx} carrera={carrera} />
        ))}
      </div>
    </section>
  );
}
