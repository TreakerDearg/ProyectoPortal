import "../styles/hero.css";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">🚀 Innovación y Tecnología Educativa</h1>
        <p className="hero-subtitle">
          Formación avanzada con <span className="highlight">IA aplicada</span> a la educación técnica.
          Desarrollá tu potencial en un entorno digital real.
        </p>
        <button className="btn-hero">Explorar Carreras</button>
        <div className="hero-indicators">
          <div className="indicator">
            <span className="indicator-label">Proyectos Activos</span>
            <div className="indicator-bar">
              <div className="indicator-fill" style={{ width: "85%" }}></div>
            </div>
          </div>
          <div className="indicator">
            <span className="indicator-label">Alumnos Registrados</span>
            <div className="indicator-bar">
              <div className="indicator-fill" style={{ width: "92%" }}></div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-side">
        <div className="panel-info">
          <h3 className="panel-title">Industria 4.0</h3>
          <p className="panel-description">Tecnología aplicada, IA y automatización.</p>
          <div className="panel-tags">
            <span className="tag">IoT</span>
            <span className="tag">Robótica</span>
            <span className="tag">VR/AR</span>
          </div>
        </div>
        <div className="hud-overlay">
          <div className="hud-circle hud-circle1"></div>
          <div className="hud-circle hud-circle2"></div>
          <div className="hud-grid"></div>
        </div>
      </div>
    </section>
  );
}
