const talleres = [
  {
    id: 1,
    nombre: "Panificados sin gluten",
    descripcion:
      "Aprendé a lograr panes con corteza crocante y miga suave, sin gluten, desde cero.",
  },
  {
    id: 2,
    nombre: "Repostería libre de gluten",
    descripcion:
      "Tartas, scones y masas dulces: técnicas y trucos para que no te falte nada.",
  },
  {
    id: 3,
    nombre: "Cocina celíaca para el día a día",
    descripcion:
      "Menú semanal, sustitutos y buenas prácticas para evitar la contaminación cruzada en casa.",
  },
];

export default function Workshops() {
  return (
    <section id="talleres" className="py-16 bg-artesano-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-artesano-azul mb-4">
          Nuestros Talleres
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Capacitaciones prácticas para aprender a cocinar sin gluten, dictadas
          por nuestro equipo de panaderos artesanales.
        </p>

        <img
          src="/taller.png"
          alt="Taller de cocina sin gluten ArteSano"
          className="w-full max-w-2xl mx-auto h-80 object-cover rounded-2xl shadow-lg mb-12"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {talleres.map((taller) => (
            <div
              key={taller.id}
              className="bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition p-6 text-left"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {taller.nombre}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {taller.descripcion}
              </p>
            </div>
          ))}
        </div>

        <a
          href="https://wa.me/5491112345678"
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-12 bg-artesano-naranja text-artesano-white font-bold px-8 py-3 rounded-lg hover:bg-artesano-celeste transition"
        >
          Inscribime a un taller
        </a>
      </div>
    </section>
  );
}
