export default function Encargos() {
  return (
    <section
      id="encargos"
      className="relative bg-cover bg-center bg-no-repeat py-24"
      style={{ backgroundImage: "url('/calzones.png')" }}
    >
      <div className="absolute inset-0 bg-artesano-azul/95"></div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-artesano-white mb-4">
          Encargos
        </h2>
        <p className="text-artesano-white text-lg mb-8">
          ¿Cumpleaños, eventos o pedidos grandes? Armamos tu pedido a medida,
          siempre artesanal y libre de gluten.
        </p>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/empanadas.png"
              alt="Empanadas"
              className="w-full h-40 object-cover"
            />
            <p className="bg-artesano-white text-artesano-azul font-bold py-2">
              Empanadas
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/facturas.png"
              alt="Facturas"
              className="w-full h-40 object-cover"
            />
            <p className="bg-artesano-white text-artesano-azul font-bold py-2">
              Facturas
            </p>
          </div>
        </div>

        <a
          href="https://wa.me/5491112345678"
          target="_blank"
          rel="noreferrer"
          className="bg-artesano-naranja text-artesano-white font-bold px-8 py-3 rounded-lg hover:bg-artesano-celeste transition"
        >
          Consultar por WhatsApp
        </a>
      </div>
    </section>
  );
}
