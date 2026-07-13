import { useState } from "react";

const links = [
  { href: "#productos", label: "Nuestros Productos" },
  { href: "#mas-vendidos", label: "Más Vendidos" },
  { href: "#encargos", label: "Encargos" },
  { href: "#talleres", label: "Talleres" },
  { href: "#quienes-somos", label: "Quiénes Somos" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-artesano-azul shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-wrap justify-between items-center gap-y-2">
        <a href="#" className="flex items-center gap-2 sm:gap-3 shrink-0">
          <div className="h-14 w-14 sm:h-20 sm:w-20 lg:h-[106px] lg:w-[106px] bg-artesano-white rounded-md flex items-center justify-center shrink-0">
            <img src="/logo-square.png" alt="ArteSano" className="h-full w-full object-contain p-1" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-artesano-naranja tracking-wide">
              ArteSano
            </span>
            <span className="text-xs sm:text-sm font-normal text-artesano-naranja tracking-wide">
              San Martín de los Andes
            </span>
          </div>
        </a>

        <div className="flex items-center gap-6">
          <nav className="hidden lg:block">
            <ul className="flex gap-4 text-[16px] text-artesano-white font-medium">
              {links.map((link) => (
                <li key={link.href} className="whitespace-nowrap">
                  <a href={link.href} className="hover:text-artesano-naranja transition">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <img
            src="/gluten-free-icon-white.png"
            alt="Libre de gluten"
            className="h-8 w-8 shrink-0"
          />

          <button
            className="lg:hidden text-artesano-white"
            onClick={() => setOpen(!open)}
            aria-label="Abrir menú"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="lg:hidden bg-artesano-azul border-t border-artesano-celeste/30">
          <ul className="flex flex-col text-[16px] text-artesano-white font-medium">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-6 py-3 hover:text-artesano-naranja transition"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
