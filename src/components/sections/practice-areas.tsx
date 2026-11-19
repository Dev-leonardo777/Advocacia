import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, Landmark, Plus, Scale } from "lucide-react";
import { practiceAreas } from "@/content/practice-areas";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";

const icons = { civil: Scale, trabalhista: BriefcaseBusiness, previdenciario: Landmark };

export function PracticeAreas() {
  return (
    <section className="practice-section section-pad" id="atuacao" aria-labelledby="practice-title">
      <div className="container">
        <Reveal className="section-heading section-heading--split">
          <div><SectionLabel>Nossas áreas de atuação</SectionLabel><h2 id="practice-title">Conhecimento jurídico.<br /><em>Perspectivas que se conectam.</em></h2></div>
          <p>Um olhar atento a cada contexto, com orientação nas questões que atravessam a vida, o trabalho e o futuro.</p>
        </Reveal>
        <div className="practice-grid">
          {practiceAreas.map((area, index) => {
            const Icon = icons[area.id];
            return <Reveal key={area.id} delay={index * 0.07}>
              <details className="practice-card" id={`area-${area.id}`}>
                <summary><div className="practice-card-top"><Icon size={37} strokeWidth={1.2} aria-hidden="true" /><span>{area.number}</span></div><h3>{area.title}</h3><p>{area.description}</p><span className="practice-action">Conheça a atuação <Plus size={19} aria-hidden="true" /></span></summary>
                <div className="practice-details"><ul>{area.topics.map((topic) => <li key={topic}>{topic}</li>)}</ul><Link href={`/?area=${area.id}#contato`} scroll prefetch={false}>Converse sobre seu caso <ArrowRight size={16} aria-hidden="true" /></Link></div>
              </details>
            </Reveal>;
          })}
        </div>
      </div>
    </section>
  );
}
