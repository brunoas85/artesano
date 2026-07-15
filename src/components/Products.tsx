const productos = [
  {
    id: 1,
    nombre: "Baguette",
    categoria: "Panes",
    descripcion:
      "Corteza crocante y miga suave, la baguette artesanal libre de gluten de siempre.",
    imagen: "/baguette.png",
  },
  {
    id: 2,
    nombre: "Calzones de espinaca y ricota",
    categoria: "Salados",
    descripcion:
      "Masa artesanal rellena, ideal para el mediodía o para llevar de viaje.",
    imagen: "/calzones.png",
  },
  {
    id: 3,
    nombre: "Tarta Engadina",
    categoria: "Dulces",
    descripcion:
      "Clásica tarta de nueces y caramelo, una receta suiza hecha 100% sin gluten.",
    imagen: "/engadina.png",
  },
  {
    id: 4,
    nombre: "Scones",
    categoria: "Dulces",
    descripcion:
      "Tiernos y recién horneados, perfectos para acompañar el mate o el café.",
    imagen: "/scons.png",
  },
  {
    id: 5,
    nombre: "Premezcla ArteSano",
    categoria: "Despensa",
    descripcion:
      "Llevate nuestra premezcla y horneá tus propias recetas sin gluten en casa.",
    imagen: "/premezcla.png",
  },
  {
    id: 6,
    nombre: "Empanadas",
    categoria: "Salados",
    descripcion:
      "Empanadas artesanales de relleno jugoso, horneadas y 100% libres de gluten.",
    imagen: "/empanadas.png",
  },
  {
    id: 7,
    nombre: "Facturas",
    categoria: "Dulces",
    descripcion:
      "Facturas tiernas y recién horneadas, ideales para el desayuno o la merienda.",
    imagen: "/facturas.png",
  },
];

export default function Products() {
  return (
    <section id="productos" className="py-16 bg-artesano-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-artesano-naranja mb-4">
          Nuestros productos
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Panes, salados y dulces artesanales, elaborados a diario y 100% libres de gluten.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {productos.map((producto) => (
            <div
              key={producto.id}
              className="group relative bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition text-left"
            >
              <div className="relative">
                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                  className="w-full h-56 object-cover group-hover:scale-105 transition duration-300"
                />
                <span className="absolute top-3 left-3 bg-artesano-azul text-artesano-white text-xs font-bold px-3 py-1 rounded-full">
                  {producto.categoria}
                </span>
              </div>
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
