import { useState } from "react";

const links = [
  { href: "#productos", label: "Nuestros Productos" },
  { href: "#mas-vendidos", label: "Más Vendidos" },
  { href: "#encargos", label: "Encargos" },
  { href: "#quienes-somos", label: "Quiénes Somos" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-artesano-azul shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-wrap justify-between items-center gap-y-2">
        <a href="#" className="flex items-center gap-2 shrink-0">
          <div className="h-[110px] w-[110px] bg-artesano-white rounded-md flex items-center justify-center shrink-0 my-2">
            <img src="/logo-square.png" alt="ArteSano" className="h-full w-full object-contain p-1" />
          </div>
          <span className="text-[34px] font-extrabold text-artesano-naranja tracking-wide">
            ArteSano
          </span>
          <img
            src="/gluten-free-icon-white.png"
            alt="Libre de gluten"
            className="h-10 w-10 mt-[5px]"
          />
        </a>

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
