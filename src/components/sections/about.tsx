import Image from "next/image";
import { ArrowUpRight, BookOpen, Handshake, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";

export function About() {
  return (
    <section className="about-section" id="escritorio" aria-labelledby="about-title">
      <Reveal className="about-image-wrap"><Image src="/images/hero-arquitetura.png" alt="Ambiente arquitetônico ilustrativo com mármore, madeira e luz natural" fill sizes="(max-width: 760px) 100vw, 44vw" quality={85} /><span className="image-caption">O direito a serviço das pessoas.</span></Reveal>
      <div className="about-body">
        <Reveal><SectionLabel>O escritório</SectionLabel><h2 id="about-title">Antes de um caso,<br /><em>existe uma história.</em></h2><p className="about-lead">Uma advocacia que começa pela escuta e se constrói na confiança.</p><p>A proposta do Valença Advogados é aproximar o conhecimento jurídico das decisões que importam para você. Compreender o contexto, esclarecer os caminhos possíveis e tratar cada questão com a atenção que ela merece.</p><a className="text-link" href="#contato">Conte com uma conversa cuidadosa <ArrowUpRight size={18} aria-hidden="true" /></a></Reveal>
        <Reveal className="about-values"><span><ShieldCheck aria-hidden="true" />Ética e responsabilidade</span><span><BookOpen aria-hidden="true" />Rigor técnico</span><span><Handshake aria-hidden="true" />Proximidade</span></Reveal>
      </div>
    </section>
  );
}
