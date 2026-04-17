export default function Footer() {
  return (
    <footer className="border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 grid place-items-center">
              <span className="font-bold text-sm">JP</span>
            </div>
            <div className="text-sm">
              <p className="font-medium">João Paulo Lima</p>
              <p className="text-zinc-500 text-xs">
                © 2025 • Portfólio React - Migração TSI
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs text-zinc-500 mono">
            <span>React + Vite</span>
            <span>•</span>
            <span>Tailwind CSS</span>
            <span>•</span>
            <span>TypeScript</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
