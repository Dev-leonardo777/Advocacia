import { Compass, MessagesSquare, ScanLine, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";

const principles = [
  { icon: MessagesSquare, title: "Escuta que aproxima", text: "Espaço para compreender sua história, suas dúvidas e o que realmente importa para você." },
  { icon: ScanLine, title: "Atenção ao contexto", text: "Um olhar individual para os documentos, as circunstâncias e os caminhos de cada questão." },
  { icon: Compass, title: "Clareza em cada etapa", text: "Comunicação acessível para que possibilidades e próximos passos sejam compreendidos." },
  { icon: ShieldCheck, title: "Responsabilidade sempre", text: "Cuidado com as informações compartilhadas e uma atuação orientada pela ética." },
];

export function Differentials() {
  return <section className="differentials-section section-pad" id="diferenciais" aria-labelledby="differentials-title"><div className="container differentials-grid"><Reveal className="differentials-intro"><SectionLabel light>O que nos orienta</SectionLabel><h2 id="differentials-title">A confiança está<br /><em>nos detalhes.</em></h2><p>Mais do que uma resposta jurídica, uma relação construída com atenção e transparência.</p><span className="decorative-v" aria-hidden="true">V</span></Reveal><div className="principles-grid">{principles.map(({ icon: Icon, title, text }, index) => <Reveal key={title} delay={index * 0.06}><article className="principle"><Icon size={28} strokeWidth={1.3} aria-hidden="true" /><h3>{title}</h3><p>{text}</p></article></Reveal>)}</div></div></section>;
}
