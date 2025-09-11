export default function Contact() {
    return (
      <section id="contacto" className="bg-artesano-celeste text-center py-16">
        <h2 className="text-3xl font-bold text-artesano-naranja">Contacto</h2>
        <p className="mt-4 text-artesano-naranja">Hacé tu pedido o consultanos directamente:</p>
  
        <div className="mt-6 flex flex-col gap-4 items-center">
          <a
            href="https://wa.me/5491112345678"
            target="_blank"
            className="px-6 py-3 bg-artesano-naranja text-artesano-azul rounded-lg shadow hover:bg-green-600 transition"
          >
            WhatsApp
          </a>
          <a
            href="https://www.instagram.com/artesano_glutenfree"
            target="_blank"
            className="text-pink-600 hover:underline"
          >
            Instagram
          </a>
        </div>
      </section>
    );
  }
  