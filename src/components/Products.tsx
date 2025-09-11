export default function Products() {
  const productos = [
    {
      id: 1,
      nombre: "Pan artesanal",
      descripcion:
        "Suave, esponjoso y elaborado con recetas caseras, 100% libre de gluten.",
      imagen: "/pan.png",
    },
    {
      id: 2,
      nombre: "Galletas dulces",
      descripcion:
        "Ideales para la merienda o un antojo, hechas con dedicación y sin gluten.",
      imagen: "/galletas.png",
    },
    {
      id: 3,
      nombre: "Pastas caseras",
      descripcion:
        "Frescas, artesanales y libres de gluten. Una tradición familiar que podés disfrutar en casa.",
      imagen: "/pastas.png",
    },
  ];

  return (
    <section id="productos" className="py-16 bg-artesano-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Título */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-artesano-naranja mb-12">
          Nuestros productos
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {productos.map((producto) => (
            <div
              key={producto.id}
              className="bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition"
            >
              <img
                src={producto.imagen}
                alt={producto.nombre}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {producto.nombre}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {producto.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
