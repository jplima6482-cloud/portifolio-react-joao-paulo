export default function Contact() {
  return (
    <section id="contato" className="border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <h3 className="text-3xl font-semibold tracking-tight mb-4">
            Vamos conversar?
          </h3>
          <p className="text-zinc-400 mb-8">
            Aberto a estágios, freelas e colaborações em projetos web. Sou de
            Teresina-PI.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:joaopaulo@email.com"
              className="px-5 h-11 inline-flex items-center gap-2 rounded-xl bg-white text-black font-medium hover:bg-zinc-200 transition"
            >
              <i className="fas fa-envelope text-sm"></i>
              Enviar e-mail
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 h-11 inline-flex items-center gap-2 rounded-xl border border-zinc-700 hover:bg-zinc-900 transition"
            >
              <i className="fab fa-linkedin"></i>
              LinkedIn
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 h-11 inline-flex items-center gap-2 rounded-xl border border-zinc-700 hover:bg-zinc-900 transition"
            >
              <i className="fab fa-github"></i>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
