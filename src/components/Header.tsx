import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href === "#") return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 border-b border-zinc-800/50 glass bg-zinc-950/70">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center font-bold text-white shadow-lg shadow-violet-900/30 group-hover:scale-105 transition">
              JP
            </div>
            <div>
              <h1 className="font-semibold leading-none">João Paulo Lima</h1>
              <p className="text-[11px] text-zinc-500 mono -mt-0.5">
                DEV // TSI
              </p>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a
              href="#sobre"
              onClick={(e) => handleNavClick(e, "#sobre")}
              className="text-zinc-400 hover:text-white transition"
            >
              Sobre mim
            </a>
            <a
              href="#projetos"
              onClick={(e) => handleNavClick(e, "#projetos")}
              className="text-zinc-400 hover:text-white transition"
            >
              Projetos
            </a>
            <a
              href="#contato"
              onClick={(e) => handleNavClick(e, "#contato")}
              className="text-zinc-400 hover:text-white transition"
            >
              Contato
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 px-4 h-9 rounded-lg bg-white text-black text-sm font-medium hover:bg-zinc-200 transition"
            >
              <i className="fab fa-github"></i>
              <span>GitHub</span>
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-9 h-9 grid place-items-center rounded-lg border border-zinc-800 hover:bg-zinc-900"
            >
              <i className={`fas ${menuOpen ? "fa-xmark" : "fa-bars"} text-sm`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-zinc-800 bg-zinc-950">
          <div className="px-6 py-4 flex flex-col gap-3 text-sm">
            <a
              href="#sobre"
              onClick={(e) => handleNavClick(e, "#sobre")}
              className="py-2 hover:text-violet-400 transition"
            >
              Sobre mim
            </a>
            <a
              href="#projetos"
              onClick={(e) => handleNavClick(e, "#projetos")}
              className="py-2 hover:text-violet-400 transition"
            >
              Projetos
            </a>
            <a
              href="#contato"
              onClick={(e) => handleNavClick(e, "#contato")}
              className="py-2 hover:text-violet-400 transition"
            >
              Contato
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
