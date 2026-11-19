import { InteractiveFolio } from "@/components/sections/interactive-folio";
import { ArrowDown, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="container hero-layout">
        <div className="hero-content">
          <p className="eyebrow hero-eyebrow"><span />Compromisso com o que importa</p>
          <h1 id="hero-title">
            <span className="title-line"><span>Segurança jurídica </span></span>
            <span className="title-line"><span>construída com </span></span>
            <span className="title-line"><em>confiança, estratégia </em></span>
            <span className="title-line"><em>e compromisso.</em></span>
          </h1>
          <p className="hero-description">Cada história merece ser ouvida.<br />Cada decisão, uma orientação cuidadosa.</p>
          <a className="button button-gold" href="#escritorio">Conheça o escritório <ArrowRight size={18} aria-hidden="true" /></a>
        </div>
        <InteractiveFolio />
      </div>
      <div className="hero-bottom container"><a href="#atuacao"><ArrowDown size={16} aria-hidden="true" />Explore nossa atuação</a><span>Direito. Relações. Confiança.</span></div>
    </section>
  );
}
