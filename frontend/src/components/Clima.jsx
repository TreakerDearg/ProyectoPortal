import { useState, useEffect } from "react";
import "../styles/clima.css";

export default function Home() {
  const [city, setCity] = useState("Buenos Aires");
  const [suggestions, setSuggestions] = useState([]);
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [time, setTime] = useState(new Date());

  // 🧠 Voz sintetizada IA
  const speak = (text) => {
    const synth = window.speechSynthesis;
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "es-ES";
    utter.pitch = 1.1;
    utter.rate = 1;
    utter.volume = 1;
    synth.speak(utter);
  };

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // 🌍 Obtener coordenadas
  const getCoordinates = async (cityName) => {
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${cityName}`
      );
      const data = await res.json();
      if (data.length > 0) return { lat: data[0].lat, lon: data[0].lon };
      throw new Error("Ciudad no encontrada");
    } catch (err) {
      setError(err.message);
      setLoading(false);
      return null;
    }
  };

  // 🌦 Obtener clima
  const getWeather = async (cityName) => {
    setLoading(true);
    setError(null);
    const coords = await getCoordinates(cityName);
    if (!coords) return;

    try {
      const res = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current_weather=true&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto`
      );
      const data = await res.json();
      setWeather(data.current_weather);
      setForecast(data.daily);
      speak(
        `El sistema reporta que en ${cityName} la temperatura actual es de ${data.current_weather.temperature} grados Celsius, con viento a ${data.current_weather.windspeed} kilómetros por hora.`
      );
    } catch {
      setError("Error al obtener el clima");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getWeather(city);
  }, []);

  const fetchSuggestions = async (query) => {
    if (!query) return setSuggestions([]);
    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${query}`
    );
    const data = await res.json();
    setSuggestions(data.slice(0, 5));
  };

  const handleSearchChange = (e) => {
    setCity(e.target.value);
    fetchSuggestions(e.target.value);
  };

  const handleSelectSuggestion = (name) => {
    setCity(name);
    setSuggestions([]);
    getWeather(name);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSuggestions([]);
    getWeather(city);
  };

  // 🌡️ Estado del clima (según código)
  const getWeatherIcon = (code) => {
    if (!code) return "☁️";
    if ([0, 1].includes(code)) return "☀️"; // Soleado
    if ([2, 3].includes(code)) return "⛅"; // Parcialmente nublado
    if ([45, 48].includes(code)) return "🌫️"; // Neblina
    if ([51, 61, 63, 65].includes(code)) return "🌧️"; // Lluvia
    if ([71, 73, 75, 77].includes(code)) return "❄️"; // Nieve
    if ([95, 96, 99].includes(code)) return "⛈️"; // Tormenta
    return "☁️";
  };

  const getWeatherMood = (temp) => {
    if (temp > 30) return "🔥 Calor extremo. Evita exposición prolongada.";
    if (temp > 20) return "☀️ Temperatura ideal para actividades exteriores.";
    if (temp > 10) return "🌥 Clima fresco y estable.";
    return "❄️ Frío intenso, protégete del viento.";
  };

  return (
    <div className="home-container cyberpunk-ui">
      {/* Encabezado de sistema */}
      <div className="hud-top neon-glow">
        <div className="hud-time">{time.toLocaleTimeString()}</div>
        <div className="hud-date">{time.toLocaleDateString()}</div>
        <div className="hud-city">📍 {city.toUpperCase()}</div>
      </div>

      <h1 className="neon-title glitch" data-text="ATMOS-SCAN v3.1">
        ATMOS-SCAN v3.1
      </h1>

      {/* Buscador */}
      <form className="search-form" onSubmit={handleSearchSubmit}>
        <input
          type="text"
          value={city}
          onChange={handleSearchChange}
          placeholder="Ingresa ciudad..."
          className="city-input neon-input"
          autoComplete="off"
        />
        <button type="submit" className="search-btn neon-btn">
          🔍 Escanear
        </button>
        {suggestions.length > 0 && (
          <ul className="suggestions-list neon-card">
            {suggestions.map((s, idx) => (
              <li key={idx} onClick={() => handleSelectSuggestion(s.display_name)}>
                {s.display_name}
              </li>
            ))}
          </ul>
        )}
      </form>

      {/* Estado */}
      {loading && <p className="loading neon-text">🧠 Escaneando atmósfera...</p>}
      {error && <p className="error neon-text">⚠️ {error}</p>}

      {/* Panel Clima */}
      {weather && (
        <div className="weather-hud neon-card holographic">
          <div className="hud-left">
            <div className="weather-icon">{getWeatherIcon(weather.weathercode)}</div>
            <h2 className="city-name">{city}</h2>
            <p className="temp-display">{weather.temperature}°C</p>
            <p className="hud-mood">{getWeatherMood(weather.temperature)}</p>
          </div>

          <div className="hud-right">
            <p>💨 Viento: {weather.windspeed} km/h</p>
            <p>🧭 Dirección: {weather.winddirection}°</p>
            <p>🌐 Zona: {forecast.timezone || "Local"}</p>
            <p>🛰 Estado: {weather.weathercode ? "Activo" : "Normal"}</p>
          </div>
        </div>
      )}

      {/* Pronóstico */}
      {forecast && forecast.time && (
        <div className="forecast-container">
          <h3 className="neon-subtitle">PRONÓSTICO 5 DÍAS</h3>
          <div className="forecast-grid">
            {forecast.time.slice(0, 5).map((day, idx) => (
              <div key={idx} className="forecast-card neon-frame">
                <p>{new Date(day).toLocaleDateString()}</p>
                <p>{getWeatherIcon(forecast.weathercode[idx])}</p>
                <p>Máx: {forecast.temperature_2m_max[idx]}°C</p>
                <p>Min: {forecast.temperature_2m_min[idx]}°C</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Panel IA */}
      <div className="ai-panel neon-border">
        <h3>🤖 Asistente Climático</h3>
        <p>
          {weather
            ? `Condiciones estables. ${getWeatherMood(weather.temperature)}`
            : "Esperando entrada del usuario..."}
        </p>
      </div>

      {/* Efectos visuales */}
      <div className="cyber-grid-overlay"></div>
      <div className="scan-line"></div>
    </div>
  );
}
