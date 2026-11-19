import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { practiceAreas } from "@/content/practice-areas";

export function Team() {
  return (
    <section className="team-section section-pad" id="equipe" aria-labelledby="team-title">
      <div className="container team-directory">
        <Reveal className="directory-intro">
          <SectionLabel>Nossa equipe</SectionLabel>
          <h2 id="team-title">O olhar humano<br /><em>por trás da atuação.</em></h2>
          <ul className="directory-areas">
            {practiceAreas.map(({ id, title }) => <li key={id}>{title}</li>)}
          </ul>
          <p className="directory-note">Apresentação da equipe em atualização.</p>
          <a className="text-link" href="#contato">Fale com o escritório <ArrowUpRight size={17} aria-hidden="true" /></a>
        </Reveal>
        <figure className="directory-plate">
          <Image src="/images/escritorio-justica.png" alt="Escultura de bronze da Justiça, com uma balança suspensa diante da estante de livros" fill sizes="(max-width: 760px) 90vw, 45vw" quality={85} />
          <figcaption>Imagem ilustrativa</figcaption>
        </figure>
      </div>
    </section>
  );
}
