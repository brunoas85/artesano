export default function AboutUs() {
  return (
    <section id="quienes-somos" className="py-16 bg-artesano-white">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <img
          src="/premezcla.png"
          alt="Elaboración artesanal ArteSano"
          className="w-full h-96 object-cover rounded-2xl shadow-lg"
        />
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-extrabold text-artesano-naranja mb-6">
            Quiénes somos
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            ArteSano nació de las ganas de comer rico sin resignar salud.
            Elaboramos cada pan, salado y dulce a mano, con recetas propias,
            100% libres de gluten.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Trabajamos todos los días para que celíacos e intolerantes puedan
            disfrutar de una panadería artesanal de verdad, sin resignar sabor
            ni calidad.
          </p>
        </div>
      </div>
    </section>
  );
}
