import { projetos } from "../data/projetos";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <section id="projetos" className="border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20">
        {/* Section header */}
        <div className="flex items-end justify-between gap-8 mb-12">
          <div>
            <h3 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Meus Projetos
            </h3>
            <p className="text-zinc-500 mt-2 max-w-xl">
              Projetos desenvolvidos durante a formação em ADS, TSI e no
              técnico. Renderizados dinamicamente via React.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2 text-xs mono text-zinc-500">
            <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
            <span>{projetos.length} projetos</span>
          </div>
        </div>

        {/* Projects grid — renderização dinâmica a partir do array */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projetos.map((projeto) => (
            <ProjectCard key={projeto.id} projeto={projeto} />
          ))}
        </div>

        {/* Technical explanation */}
        <div className="mt-16 p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-violet-600/20 border border-violet-500/30 grid place-items-center flex-shrink-0">
              <i className="fas fa-code text-violet-400 text-sm"></i>
            </div>
            <div>
              <h4 className="font-medium mb-2">
                Como funciona a renderização
              </h4>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Esta seção é gerada dinamicamente a partir de um{" "}
                <code className="px-1.5 py-0.5 rounded bg-zinc-800 text-violet-300 mono text-xs">
                  array de objetos
                </code>{" "}
                em TypeScript. Cada objeto contém título, descrição, tecnologias
                e links. O React percorre o array com{" "}
                <code className="px-1.5 py-0.5 rounded bg-zinc-800 mono text-xs">
                  .map()
                </code>{" "}
                e renderiza um componente{" "}
                <code className="px-1.5 py-0.5 rounded bg-zinc-800 text-violet-300 mono text-xs">
                  {"<ProjectCard />"}
                </code>{" "}
                para cada projeto. Migrado de vanilla JS para React com
                componentização e tipagem TypeScript.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
