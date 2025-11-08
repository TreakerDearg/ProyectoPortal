import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [alumnosOpen, setAlumnosOpen] = useState(false);
  const location = useLocation();

  // Cierra el menú al cambiar de ruta
  useEffect(() => {
    setMenuOpen(false);
    setAlumnosOpen(false);
  }, [location]);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleAlumnos = () => setAlumnosOpen(!alumnosOpen);

  return (
    <nav className="navbar-cyberpunk">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <Link to="/">Portal Institucional</Link>
        </div>

        {/* Enlaces */}
        <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/noticias">Noticias</Link></li>
          <li><Link to="/carreras">Carreras</Link></li>

          {/* Alumnos con submenú */}
          <li className="submenu">
            <button className="submenu-btn" onClick={toggleAlumnos}>
              Alumnos <span className={`arrow ${alumnosOpen ? "open" : ""}`}>▾</span>
            </button>
            <ul className={`dropdown ${alumnosOpen ? "active" : ""}`}>
              <li>
                <Link to="/cargar-alumno">Cargar Alumno</Link>
              </li>
              <li>
                <Link to="/listado-alumnos">Listado Alumnos</Link>
              </li>
            </ul>
          </li>

          {/* Unidad 6 */}
          <li>
            <Link to="/unidad6" className="unidad6-btn">Unidad 6</Link>
          </li>
        </ul>

        {/* Botón hamburguesa */}
        <div className="navbar-toggle" onClick={toggleMenu}>
          <ion-icon name={menuOpen ? "close" : "menu"}></ion-icon>
        </div>
      </div>
    </nav>
  );
}
