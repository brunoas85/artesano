import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center text-center"
      style={{ backgroundImage: "url('/hero1.png')" }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 max-w-2xl px-4">
        <h2 className="text-4xl md:text-6xl font-extrabold text-artesano-white mb-6">
          Comé sano, viví mejor
        </h2>
        <p className="text-lg md:text-xl text-artesano-white mb-8">
          Productos artesanales sin gluten, hechos para vos.
        </p>
        <button
          onClick={() => navigate("/home")}
          className="bg-artesano-naranja text-artesano-white font-bold px-8 py-3 rounded-lg hover:bg-artesano-celeste transition"
        >
          Ingresar
        </button>
      </div>
    </section>
  );
}
