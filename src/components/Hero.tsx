import { useState } from "react";

const imagenes = [
  "/hero.png",
  "/baguette.png",
  "/calzones.png",
  "/engadina.png",
  "/premezcla.png",
  "/scons.png",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  const siguiente = () => setIndex((i) => (i + 1) % imagenes.length);

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center text-center overflow-hidden">
      {/* Imagen actual, clickeable para pasar a la siguiente */}
      <button
        type="button"
        onClick={siguiente}
        aria-label="Ver siguiente imagen"
        className="absolute inset-0 w-full h-full cursor-pointer"
      >
        <img
          src={imagenes[index]}
          alt=""
          className="w-full h-full object-cover"
        />
      </button>

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/50 pointer-events-none"></div>

      {/* Indicadores */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {imagenes.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Ir a la imagen ${i + 1}`}
            className={`w-2.5 h-2.5 rounded-full transition ${
              i === index ? "bg-artesano-naranja" : "bg-artesano-white/60"
            }`}
          />
        ))}
      </div>

      {/* Contenido */}
      <div className="relative z-10 max-w-2xl px-4 pointer-events-none">
        <h2 className="text-4xl md:text-6xl font-extrabold text-artesano-white mb-6">
          Comé sano, viví mejor
        </h2>
        <p className="text-lg md:text-xl text-artesano-white mb-8">
          Productos artesanales sin gluten, hechos para vos.
        </p>
        <div className="flex flex-wrap gap-4 justify-center pointer-events-auto">
          <a
            href="#productos"
            className="bg-artesano-naranja text-artesano-white font-bold px-8 py-3 rounded-lg hover:bg-artesano-celeste transition"
          >
            Ver productos
          </a>
          <a
            href="#encargos"
            className="bg-artesano-white text-artesano-azul font-bold px-8 py-3 rounded-lg hover:bg-artesano-celeste hover:text-artesano-white transition"
          >
            Hacer un encargo
          </a>
        </div>
      </div>
    </section>
  );
}
