export default function Hero() {
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href === "#") return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="sobre" className="relative">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(99,102,241,0.15),transparent_60%)]"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-violet-600/10 blur-[120px]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
          {/* Left content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-zinc-400 mono">
                Disponível para projetos
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-semibold tracking-tight leading-[1.05] mb-6">
              Desenvolvedor em formação,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">
                focado em soluções web.
              </span>
            </h2>

            <p className="text-lg text-zinc-400 leading-relaxed max-w-xl">
              Olá! Sou o João Paulo Lima, estudante de{" "}
              <strong className="text-zinc-200">
                Tecnologia em Sistemas para Internet na UESPI
              </strong>
              . Sou formado em{" "}
              <strong className="text-zinc-200">
                Análise e Desenvolvimento de Sistemas pela UNINASSAU
              </strong>{" "}
              e{" "}
              <strong className="text-zinc-200">
                Técnico em Informática pelo IFPI
              </strong>
              .
            </p>
            <p className="text-zinc-500 mt-4 max-w-xl">
              Crio interfaces modernas com HTML5, CSS3 e JavaScript, sempre
              buscando código limpo, performance e boa experiência do usuário.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href="#projetos"
                onClick={(e) => handleClick(e, "#projetos")}
                className="px-5 h-11 grid place-items-center rounded-xl bg-white text-black font-medium hover:bg-zinc-200 transition"
              >
                Ver projetos
              </a>
              <a
                href="#contato"
                onClick={(e) => handleClick(e, "#contato")}
                className="px-5 h-11 grid place-items-center rounded-xl border border-zinc-700 hover:bg-zinc-900 transition"
              >
                Entrar em contato
              </a>
            </div>

            {/* Formação cards */}
            <div className="mt-12 grid sm:grid-cols-3 gap-4">
              {[
                {
                  label: "Cursando",
                  title: "TSI - UESPI",
                  sub: "Sistemas para Internet",
                },
                {
                  label: "Graduado",
                  title: "ADS - UNINASSAU",
                  sub: "Análise e Desenvolvimento",
                },
                {
                  label: "Técnico",
                  title: "Informática - IFPI",
                  sub: "Ensino Técnico",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800"
                >
                  <div className="text-[11px] uppercase tracking-wider text-zinc-500 mb-1">
                    {item.label}
                  </div>
                  <div className="font-medium leading-snug">{item.title}</div>
                  <div className="text-xs text-zinc-500 mt-1">{item.sub}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Terminal card */}
          <div className="relative lg:justify-self-end w-full max-w-[420px]">
            <div className="relative rounded-[28px] bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-800 p-[1px] shadow-2xl shadow-black/50">
              <div className="rounded-[26px] bg-zinc-950 p-8">
                <div className="flex items-center justify-between mb-6">
                  <span className="mono text-xs text-zinc-500">
                    ~/joao-paulo
                  </span>
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
                  </div>
                </div>

                <div className="space-y-3 mono text-[13px] leading-relaxed">
                  <div>
                    <span className="text-zinc-600">$</span>{" "}
                    <span className="text-violet-400">whoami</span>
                  </div>
                  <div className="text-zinc-300 pl-4">João Paulo Lima</div>
                  <div>
                    <span className="text-zinc-600">$</span>{" "}
                    <span className="text-violet-400">cat skills.txt</span>
                  </div>
                  <div className="pl-4 text-zinc-400">
                    HTML5 • CSS3 • JavaScript
                    <br />
                    Tailwind • Git • GitHub
                    <br />
                    Responsividade • Acessibilidade
                  </div>
                  <div>
                    <span className="text-zinc-600">$</span>{" "}
                    <span className="text-violet-400">ls interesses/</span>
                  </div>
                  <div className="pl-4 text-zinc-400">
                    frontend/ backend/ ui-ux/ devops/
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-zinc-800 flex items-center justify-between">
                  <div className="flex -space-x-2">
                    <img
                      src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=80"
                      className="w-8 h-8 rounded-full border-2 border-zinc-950 object-cover"
                      alt="Code"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1547658719-da2b51169166?w=80"
                      className="w-8 h-8 rounded-full border-2 border-zinc-950 object-cover"
                      alt="Web"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=80"
                      className="w-8 h-8 rounded-full border-2 border-zinc-950 object-cover"
                      alt="Dev"
                    />
                  </div>
                  <span className="text-xs text-zinc-500">
                    Teresina, PI • Brasil
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
