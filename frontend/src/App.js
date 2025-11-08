import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashboardPage";
import NoticiasPage from "./pages/NoticiasPage";
import CarrerasPage from "./pages/CarrerasPage";
import CargarAlumnoPage from "./pages/CargarAlumnoPage";
import ListadoAlumnosPage from "./pages/ListadoAlumnosPage";
import Unidad6Page from "./pages/Unidad6Page";
function App() {
  return (
    <div className="app-cyberpunk">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/noticias" element={<NoticiasPage />} />
          <Route path="/carreras" element={<CarrerasPage />} />
          <Route path="/cargar-alumno" element={<CargarAlumnoPage />} />
          <Route path="/listado-alumnos" element={<ListadoAlumnosPage />} />
          <Route path="/unidad6" element={<Unidad6Page />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
