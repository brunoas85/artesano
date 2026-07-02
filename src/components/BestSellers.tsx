const masVendidos = [
  { id: 1, nombre: "Baguette", imagen: "/baguette.png" },
  { id: 2, nombre: "Tarta Engadina", imagen: "/engadina.png" },
  { id: 3, nombre: "Scones", imagen: "/scons.png" },
];

export default function BestSellers() {
  return (
    <section id="mas-vendidos" className="py-16 bg-artesano-celeste/10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-artesano-azul mb-12">
          Más vendidos
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {masVendidos.map((producto) => (
            <div
              key={producto.id}
              className="relative bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition"
            >
              <span className="absolute top-3 right-3 z-10 bg-artesano-naranja text-artesano-white text-xs font-bold px-3 py-1 rounded-full">
                Más vendido
              </span>
              <img
                src={producto.imagen}
                alt={producto.nombre}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">{producto.nombre}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
