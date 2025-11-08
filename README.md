
---

---

## 📁 Estructura del Proyecto

```bash
ProyectoPortal/
│
├── backend/                      # Servidor API REST con Node.js, Express y MongoDB
│   ├── routes/                   # Rutas (ej: alumnos.js)
│   ├── models/                   # Modelos Mongoose
│   ├── middlewares/              # Logger, manejador de errores, etc.
│   ├── server.js                 # Punto de entrada del backend
│   ├── db.js                     # Conexión MongoDB
│   └── .env                      # Variables de entorno (Render)
│
├── frontend/                     # Aplicación cliente React
│   ├── src/
│   │   ├── components/           # Componentes reutilizables (Hero, Clima, Noticias, etc.)
│   │   ├── pages/                # Páginas del sitio (HomePage, NoticiasPage, etc.)
│   │   ├── styles/               # Estilos CSS (hero.css, clima.css, noticias.css)
│   │   ├── App.jsx               # Router principal
│   │   └── main.jsx              # Renderizado raíz con ReactDOM
│   ├── public/                   # Archivos estáticos
│   ├── .env                      # Variables del cliente (VITE_API_URL)
│   ├── package.json
│   └── vite.config.js
│
└── README.md
````

---

## ⚙️ Instalación y Configuración Local

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/TreakerDearg/ProyectoPortal.git
cd ProyectoPortal
```

### 2️⃣ Instalar dependencias

```bash
cd backend && npm install
cd ../frontend && npm install
```

### 3️⃣ Configurar variables de entorno

**Backend (.env)**

```env
PORT=5000
MONGO_URI=tu_conexion_mongodb
```

**Frontend (.env)**

```env
VITE_API_URL=https://backend-render-url.onrender.com/api
```

---

## 🧭 Navegación y Estructura del Frontend

El proyecto usa **React Router DOM v6** para manejar las rutas internas del sitio.
Esto permite que las páginas se carguen dinámicamente sin recargar el sitio.

### 🔹 Enrutamiento principal (`App.jsx`)

```jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NoticiasPage from "./pages/NoticiasPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/noticias" element={<NoticiasPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}
```

---

## 🧩 Componentes Clave

### 🦾 `Hero.jsx`

* Encabezado dinámico con enfoque en **innovación tecnológica educativa**.
* Botón CTA (“Explorar Carreras”) que redirige a la sección de carreras o noticias.
* Efectos CSS con estética **industrial y neon**.

---

### 🌆 `Clima.jsx` (ATMOS-SCAN v3.1)

Un **sistema meteorológico cyberpunk** que integra voz IA y datos en tiempo real.

**Características:**

* Obtiene coordenadas mediante **OpenStreetMap**.
* Consulta pronóstico con **Open-Meteo API**.
* Genera **voz sintética IA** mediante `window.speechSynthesis`.
* Pronóstico extendido de 5 días con íconos dinámicos.
* Interfaz con efectos **holográficos, glitch y neon grid**.

---

### 📰 `Noticias.jsx`

Panel informativo de noticias institucionales con estética **cyberpunk**.
No consume API externa, se alimenta de datos estáticos con noticias académicas, tecnológicas y de IA.

**Ejemplo:**

```jsx
const noticias = [
  { titulo: "IA Educativa 2030", descripcion: "Implementación de sistemas predictivos en aulas inteligentes." },
  { titulo: "Fusión Humano-Máquina", descripcion: "Estudiantes desarrollan interfaces neuronales experimentales." },
];
```

---

### 🏠 `HomePage.jsx`

Punto de inicio del portal.
Integra los componentes principales:

```jsx
import Hero from "../components/Hero";
import Clima from "../components/Clima";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Clima />
    </>
  );
}
```

---

## ☁️ Módulo Meteorológico – ATMOS-SCAN v3.1

🛰 **Tecnología aplicada:**

* API: Open-Meteo + OpenStreetMap
* IA: Síntesis de voz (SpeechSynthesis API)
* Estilo: HUD holográfico con animaciones neon
* Feedback auditivo y visual

🎯 **Objetivo:** Proporcionar una experiencia inmersiva y funcional para consulta del clima, simulando un sistema de monitoreo futurista.

---

## 🧠 Unidad 6 – Inteligencia Artificial Generativa

### 🔹 ¿Qué es la IA Generativa?

Es una rama de la IA que permite **crear contenido nuevo** (texto, imágenes, código o música) a partir de datos previos, usando modelos como GPT, DALL·E o Gemini.

---

### 🔹 Herramientas Destacadas

| Herramienta             | Descripción                 | Uso en el Proyecto                                         |
| ----------------------- | --------------------------- | ---------------------------------------------------------- |
| **ChatGPT (OpenAI)**    | Generador de texto y código | Asistencia en diseño del frontend y optimización de lógica |
| **GitHub Copilot**      | Autocompletado inteligente  | Generación de funciones repetitivas en React               |
| **DALL·E / Midjourney** | Creación de imágenes IA     | Diseño visual futurista para inspiración de interfaz       |

---

### 🔹 Prompts Utilizados

**Ejemplo 1 – Generar código React**

```
Crea un componente de clima en React con un diseño cyberpunk y datos en tiempo real.
```

**Ejemplo 2 – Estilo visual**

```
Diseña una interfaz educativa futurista con estética industrial y luces neon tipo HUD.
```

---

### 🔹 Aplicación real con IA

**Ejemplo:** *Notion AI*
Integra GPT para redacción automática, resúmenes y análisis de contenido.
Permite al usuario crear documentos profesionales en segundos sin conocimientos técnicos.

---

### 🔹 Reflexión ética

> “La IA no reemplaza al desarrollador, lo potencia.”

La IA **amplifica la creatividad** del programador, pero **no sustituye la toma de decisiones ni el juicio humano**.
Su uso ético implica responsabilidad, transparencia y supervisión constante.

---

### 🔹 Demostración práctica

El módulo **ATMOS-SCAN v3.1** utiliza IA generativa de voz, mostrando la capacidad de integración directa entre:

* APIs públicas.
* IA sintética.
* Diseño UX orientado a experiencia inmersiva.

---

## 🧑‍💻 Autor

**Treaker Dearg**
Full Stack Web Developer & Bartender 🍸
📦 [GitHub – TreakerDearg](https://github.com/TreakerDearg)
📧 Contacto: *Disponible bajo solicitud*

---

## 📜 Licencia

Este proyecto está bajo licencia **MIT**.
Puedes modificar y distribuir el código citando la fuente original.

---

## 🛰 Deploys

| Servicio   | Enlace                  | Descripción                |
| ---------- | ----------------------- | -------------------------- |
| **Render** | *(enlace del backend)*  | API REST desplegada        |
| **Vercel** | *(enlace del frontend)* | Portal React UI desplegado |

---

<p align="center">
  <img src="https://img.shields.io/badge/Status-En%20Desarrollo-yellow?style=for-the-badge&logo=github"/>
  <img src="https://img.shields.io/badge/IA-Integrada%20con%20SpeechSynthesis%20API-blueviolet?style=for-the-badge"/>
</p>
```

---
