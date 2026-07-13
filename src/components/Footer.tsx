export default function Footer() {
    const year = new Date().getFullYear();

    return (
      <footer className="bg-artesano-naranja text-center py-4 mt-0">
        <p className="text-artesano-celeste text-sm">
          © {year} ArteSano Gluten Free · Desarrollado por bRuno´s
        </p>
      </footer>
    );
  }
