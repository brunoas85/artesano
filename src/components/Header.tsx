export default function Header() {
  return (
    <header className="p-6 bg-artesano-azul flex justify-between items-center">
      <h1 className="text-2xl font-extrabold text-artesano-naranja tracking-wide">
        ArteSano
      </h1>
      <nav>
        <ul className="flex gap-8 text-artesano-white font-medium">
          <li><a href="#productos" className="hover:text-artesano-naranja transition">Productos</a></li>
          <li><a href="#contacto" className="hover:text-artesano-naranja transition">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}
