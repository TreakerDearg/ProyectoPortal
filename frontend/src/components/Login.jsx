export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-fondo">
      <form className="bg-secundario p-8 rounded-2xl shadow-lg w-96">
        <h2 className="text-3xl font-bold text-center text-primario mb-6">
          Iniciar Sesión
        </h2>
        <input
          type="email"
          placeholder="Correo institucional"
          className="w-full p-3 mb-4 rounded-lg bg-fondo text-white focus:outline-none focus:ring-2 focus:ring-primario"
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="w-full p-3 mb-6 rounded-lg bg-fondo text-white focus:outline-none focus:ring-2 focus:ring-primario"
        />
        <button
          type="submit"
          className="w-full bg-primario text-black font-semibold py-3 rounded-lg hover:bg-acento transition"
        >
          Acceder
        </button>
      </form>
    </div>
  );
}
