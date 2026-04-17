import type { Projeto } from "../data/projetos";

interface ProjectCardProps {
  projeto: Projeto;
}

export default function ProjectCard({ projeto }: ProjectCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-[24px] bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 hover:-translate-y-1">
      {/* Image */}
      <div className="aspect-[16/10] overflow-hidden bg-zinc-950 relative">
        <img
          src={projeto.imagem}
          alt={projeto.titulo}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
        />
        {projeto.destaque && (
          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-violet-600 text-[10px] font-semibold uppercase tracking-wider">
            Destaque
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h4 className="font-semibold text-[17px] leading-snug group-hover:text-violet-400 transition">
            {projeto.titulo}
          </h4>
        </div>

        <p className="text-sm text-zinc-400 leading-relaxed mb-4 line-clamp-2">
          {projeto.descricao}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {projeto.tecnologias.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-lg bg-zinc-950 border border-zinc-800 text-[11px] text-zinc-400 mono"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
          <span className="text-[11px] text-zinc-500 uppercase tracking-wider">
            {projeto.categoria}
          </span>
          <div className="flex items-center gap-3">
            <a
              href={projeto.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 grid place-items-center rounded-lg bg-zinc-950 border border-zinc-800 hover:border-zinc-700 hover:text-white transition"
              title="Ver código"
            >
              <i className="fab fa-github text-sm"></i>
            </a>
            <a
              href={projeto.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 grid place-items-center rounded-lg bg-zinc-950 border border-zinc-800 hover:border-zinc-700 hover:text-white transition"
              title="Ver demo"
            >
              <i className="fas fa-arrow-up-right-from-square text-[12px]"></i>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
