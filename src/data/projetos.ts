export interface Projeto {
  id: number;
  titulo: string;
  descricao: string;
  tecnologias: string[];
  imagem: string;
  github: string;
  demo: string;
  destaque: boolean;
  categoria: string;
}

export const projetos: Projeto[] = [
  {
    id: 1,
    titulo: "Sistema de Controle Acadêmico",
    descricao:
      "Projeto desenvolvido em ADS - UNINASSAU. CRUD completo para gestão de alunos e disciplinas com validação de formulários.",
    tecnologias: ["HTML5", "CSS3", "JavaScript", "LocalStorage"],
    imagem:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800",
    github: "https://github.com/joaopaulo/sistema-academico",
    demo: "#",
    destaque: true,
    categoria: "ADS - UNINASSAU",
  },
  {
    id: 2,
    titulo: "Landing Page Responsiva",
    descricao:
      "Página institucional desenvolvida com foco em mobile-first, utilizando Flexbox e Grid Layout.",
    tecnologias: ["HTML5", "CSS Grid", "Flexbox", "Tailwind"],
    imagem:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800",
    github: "https://github.com/joaopaulo/landing-page",
    demo: "#",
    destaque: false,
    categoria: "TSI - UESPI",
  },
  {
    id: 3,
    titulo: "App de Tarefas (To-Do)",
    descricao:
      "Aplicação JavaScript vanilla com adicionar, editar, concluir e filtrar tarefas. Dados persistidos no navegador.",
    tecnologias: ["JavaScript", "DOM", "CSS3"],
    imagem:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800",
    github: "https://github.com/joaopaulo/todo-app",
    demo: "#",
    destaque: false,
    categoria: "Projeto Pessoal",
  },
  {
    id: 4,
    titulo: "Portfólio do Técnico",
    descricao:
      "Primeiro portfólio desenvolvido no curso Técnico em Informática - IFPI. Base para evolução atual.",
    tecnologias: ["HTML", "CSS", "JavaScript"],
    imagem:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800",
    github: "https://github.com/joaopaulo/portfolio-ifpi",
    demo: "#",
    destaque: false,
    categoria: "IFPI - Técnico",
  },
  {
    id: 5,
    titulo: "Consumo de API ViaCEP",
    descricao:
      "Formulário que busca CEP automaticamente consumindo API pública, com tratamento de erros.",
    tecnologias: ["Fetch API", "JavaScript", "JSON"],
    imagem:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    github: "https://github.com/joaopaulo/viacep",
    demo: "#",
    destaque: false,
    categoria: "TSI - UESPI",
  },
  {
    id: 6,
    titulo: "Dashboard Responsivo",
    descricao:
      "Interface de dashboard com gráficos, tabelas e menu lateral colapsável. Totalmente responsivo.",
    tecnologias: ["CSS Grid", "JavaScript", "Chart.js"],
    imagem:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    github: "https://github.com/joaopaulo/dashboard",
    demo: "#",
    destaque: true,
    categoria: "ADS - UNINASSAU",
  },
];
