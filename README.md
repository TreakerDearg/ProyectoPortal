
---

```markdown
# 🏙️ Portal Institucional IA – Sistema Integrado con Asistente y Clima Cyberpunk

![React](https://img.shields.io/badge/Frontend-React-blue?logo=react)
![Node.js](https://img.shields.io/badge/Backend-Node.js-green?logo=node.js)
![Express](https://img.shields.io/badge/Framework-Express-lightgrey?logo=express)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-brightgreen?logo=mongodb)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel)
![Render](https://img.shields.io/badge/Deploy-Render-blue?logo=render)
![License](https://img.shields.io/badge/License-MIT-yellow)
![Build](https://img.shields.io/badge/Build-Passing-success)

Proyecto full stack compuesto por **backend (Node.js + Express + MongoDB)** y **frontend (React)**, diseñado con una estética **cyberpunk industrial**.  
El sistema integra módulos institucionales, un **asistente inteligente** y un **sistema meteorológico interactivo con voz IA**, desplegado en **Render (API)** y **Vercel (UI)**.

---

## 📁 Estructura del proyecto

```

ProyectoPortal/
│
├── backend/                # Servidor Node.js + Express
│   ├── src/
│   ├── models/
│   ├── routes/
│   ├── .env
│   ├── package.json
│   └── server.js
│
├── frontend/               # Aplicación React (Vite)
│   ├── src/
│   ├── public/
│   ├── .env
│   ├── package.json
│   
│
└── README.md

````

---

## ⚙️ Configuración del entorno local

### 1. Clonar el repositorio
```bash
git clone https://github.com/TreakerDearg/ProyectoPortal.git
cd ProyectoPortal
````

### 2. Instalar dependencias

#### Backend

```bash
cd backend
npm install
```

#### Frontend

```bash
cd ../frontend
npm install
```

---

## 🔐 Variables de entorno

### 📦 Backend (`backend/.env`)

```env
PORT=5000
MONGO_URI=tu_conexion_a_mongodb
```

### 🌐 Frontend (`frontend/.env`)

```env
VITE_API_URL=https://backend-render-url.onrender.com/api - ejemplo
```

> ⚠️ No subas el `.env` a GitHub. Configuralo directamente en Render y Vercel.

---

## 🚀 Comandos de desarrollo

### Backend

```bash
cd backend
npm run dev
```

### Frontend

```bash
cd frontend
npm run dev
```

---

## 🧠 Despliegue en producción

### 🔹 Backend → Render

1. Acceder a [Render.com](https://render.com)
2. Crear **New Web Service**
3. Conectar el repo `ProyectoPortal`
4. Configuración:

   * **Root Directory:** `backend`
   * **Build Command:** `npm install`
   * **Start Command:** `npm start`
   * **Environment:** Node
5. En **Environment Variables**:

   * `PORT` → `5000`
   * `MONGO_URI` → string de conexión MongoDB Atlas
6. Deploy automático tras cada push.

URL esperada:

```
https://proyectoportal-backend.onrender.com
```

---

### 🔹 Frontend → Vercel

1. Ir a [Vercel.com](https://vercel.com)
2. Crear nuevo proyecto conectado al mismo repo
3. Configuración:

   * **Root Directory:** `frontend`
   * **Build Command:** `npm run build`
   * **Output Directory:** `build`
4. En **Environment Variables**:

   * `VITE_API_URL` → URL de backend Render
5. Deploy automático tras push.

URL esperada:

```
https://proyectoportal.vercel.app
```

---

## 🌦️ Módulo Clima Cyberpunk

Integración IA y APIs:

* 🌍 **Geolocalización automática** (OpenStreetMap)
* 🌡️ **Datos meteorológicos reales** (Open Meteo API)
* 🧠 **Síntesis de voz IA** en español
* 💫 **Interfaz estilo futurista (HUD / Neon)**
* 🔮 **Pronóstico extendido 5 días**

---

## 🧩 Stack tecnológico

| Capa                     | Tecnología                 |
| ------------------------ | -------------------------- |
| **Frontend**             | React + Vite + CSS Modules |
| **Backend**              | Node.js + Express          |
| **Base de datos**        | MongoDB Atlas              |
| **APIs externas**        | Open-Meteo, OpenStreetMap  |
| **Hosting**              | Render + Vercel            |
| **Control de versiones** | Git + GitHub               |

---

## 🧰 Scripts útiles

| Acción                  | Comando                                                   |
| ----------------------- | --------------------------------------------------------- |
| Inicializar repo limpio | `git init && git add . && git commit -m "Initial commit"` |
| Subir a GitHub          | `git push -u origin main`                                 |
| Desplegar Render        | Automático tras push                                      |
| Desplegar Vercel        | Automático tras push                                      |

---

## 📊 Estado actual

✅ Backend operativo en Render
✅ Frontend compilado y funcional en Vercel
✅ Integración full-stack estable
✅ UI con diseño **cyberpunk-industrial**
✅ Módulo de clima + voz IA operativo

---

## 🧾 Licencia

Este proyecto está bajo licencia **MIT**.
Podés modificarlo, reutilizarlo o distribuirlo, dando crédito al autor original.

---

### 👤 Autor

**Treaker Dearg**
*Web Full Stack Developer & Bartender* 🍸
[GitHub](https://github.com/TreakerDearg)

---

```

---
