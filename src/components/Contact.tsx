function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
      <path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.21 8.8 2.2 12 2.2zm0 1.8c-3.15 0-3.5.01-4.73.07-.97.04-1.5.2-1.85.34-.46.18-.79.4-1.14.75-.35.35-.56.68-.75 1.14-.14.35-.3.88-.34 1.85-.06 1.23-.07 1.58-.07 4.73s.01 3.5.07 4.73c.04.97.2 1.5.34 1.85.18.46.4.79.75 1.14.35.35.68.56 1.14.75.35.14.88.3 1.85.34 1.23.06 1.58.07 4.73.07s3.5-.01 4.73-.07c.97-.04 1.5-.2 1.85-.34.46-.18.79-.4 1.14-.75.35-.35.56-.68.75-1.14.14-.35.3-.88.34-1.85.06-1.23.07-1.58.07-4.73s-.01-3.5-.07-4.73c-.04-.97-.2-1.5-.34-1.85a3.06 3.06 0 0 0-.75-1.14 3.06 3.06 0 0 0-1.14-.75c-.35-.14-.88-.3-1.85-.34-1.23-.06-1.58-.07-4.73-.07zm0 4.06a4.94 4.94 0 1 1 0 9.88 4.94 4.94 0 0 1 0-9.88zm0 1.8a3.14 3.14 0 1 0 0 6.28 3.14 3.14 0 0 0 0-6.28zm5.13-1.99a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.28-1.38a9.9 9.9 0 0 0 4.71 1.2h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm0 18.13h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.13.82.84-3.05-.2-.31a8.2 8.2 0 0 1-1.26-4.35c0-4.53 3.69-8.22 8.25-8.22 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.81c0 4.53-3.69 8.21-8.24 8.21zm4.52-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.16.25-.64.81-.78.97-.14.16-.29.18-.54.06-.25-.12-1.04-.38-1.99-1.22-.73-.65-1.23-1.46-1.37-1.71-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.42-.14 0-.31-.02-.47-.02-.16 0-.43.06-.66.31-.23.25-.86.84-.86 2.05s.88 2.38 1 2.54c.12.16 1.73 2.64 4.2 3.7.59.25 1.05.4 1.41.52.59.19 1.13.16 1.55.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.11-.22-.17-.47-.29z" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section id="contacto" className="bg-artesano-celeste text-center py-16">
      <h2 className="text-3xl font-bold text-artesano-naranja">Contacto</h2>
      <p className="mt-4 text-artesano-naranja">Hacé tu pedido o consultanos directamente:</p>

      <div className="mt-6 flex flex-col gap-4 items-center">
        <a
          href="https://wa.me/5491112345678"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-artesano-naranja text-artesano-azul rounded-lg shadow hover:bg-green-600 transition"
        >
          <WhatsAppIcon />
          WhatsApp
        </a>
      </div>

      <div className="mt-10">
        <p className="text-artesano-white font-semibold mb-4">Seguinos en nuestras redes</p>
        <div className="flex justify-center gap-6">
          <a
            href="https://www.instagram.com/artesano_glutenfree"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-artesano-white text-artesano-azul hover:bg-artesano-naranja hover:text-artesano-white transition"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://wa.me/5491112345678"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-artesano-white text-artesano-azul hover:bg-artesano-naranja hover:text-artesano-white transition"
          >
            <WhatsAppIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
