import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer-professional">
      {/* Sección: Sobre el portal */}
      <div className="footer-column">
        <h4>Portal Institucional</h4>
        <p>
          Plataforma educativa dedicada a la formación tecnológica y la integración de la Inteligencia Artificial en la web.
        </p>
        <p>© 2025 Todos los derechos reservados.</p>
      </div>

      {/* Sección: Enlaces rápidos */}
      <div className="footer-column">
        <h4>Enlaces Rápidos</h4>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#alumnos">Cargar Alumnos</a></li>
          <li><a href="#listado">Listado de Alumnos</a></li>
          <li><a href="#historia">Historia</a></li>
          <li><a href="#unidad6">IA Generativa</a></li>
        </ul>
      </div>

      {/* Sección: Contacto */}
      <div className="footer-column">
        <h4>Contacto</h4>
        <p>Email: <a href="mailto:contacto@portalinstitucional.com">contacto@portalinstitucional.com</a></p>
        <p>Teléfono: +54 11 1234-5678</p>
        <div className="footer-social">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" title="GitHub">
            <ion-icon name="logo-github" size="large"></ion-icon>
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <ion-icon name="logo-linkedin" size="large"></ion-icon>
          </a>
          <a href="mailto:contacto@portalinstitucional.com" title="Email">
            <ion-icon name="mail-outline" size="large"></ion-icon>
          </a>
        </div>
      </div>

      {/* Sección: Newsletter */}
      <div className="footer-column">
        <h4>Newsletter</h4>
        <p>Suscribite para recibir novedades y recursos educativos.</p>
        <form className="footer-newsletter">
          <input type="email" placeholder="Tu email" required />
          <button type="submit">Suscribirse</button>
        </form>
      </div>
    </footer>
  );
}
