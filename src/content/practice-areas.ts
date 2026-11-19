export const practiceAreas = [
  {
    id: "civil",
    number: "01",
    title: "Direito Civil",
    description: "Cuidado com as relações, os direitos e o patrimônio que fazem parte da sua vida.",
    topics: ["Contratos e obrigações", "Responsabilidade civil", "Relações de consumo", "Família e sucessões"],
  },
  {
    id: "trabalhista",
    number: "02",
    title: "Direito Trabalhista",
    description: "Orientação para compreender direitos e construir relações de trabalho mais seguras.",
    topics: ["Relações de emprego", "Verbas e direitos trabalhistas", "Análise de contratos de trabalho", "Atuação em conflitos trabalhistas"],
  },
  {
    id: "previdenciario",
    number: "03",
    title: "Direito Previdenciário",
    description: "Clareza para as decisões de hoje e atenção à proteção do seu futuro.",
    topics: ["Aposentadorias", "Benefícios previdenciários", "Planejamento previdenciário", "Requerimentos e revisões"],
  },
] as const;

export type PracticeArea = (typeof practiceAreas)[number]["id"];
