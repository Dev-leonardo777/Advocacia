import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { siteConfig, getWhatsAppUrl } from "@/config/site";
import { Reveal } from "@/components/ui/reveal";
import { ContactForm } from "@/components/sections/contact-form";
import { SectionLabel } from "@/components/ui/section-label";
import { contactIsConfigured } from "@/lib/contact-handler";
import { getContactEnvironment } from "@/config/contact-server";

export function Contact({ initialArea }: { initialArea?: string }) {
  const whatsappUrl = getWhatsAppUrl();
  return <section className="contact-section section-pad" id="contato" aria-labelledby="contact-title"><div className="container contact-grid"><Reveal className="contact-intro"><SectionLabel light>Vamos conversar</SectionLabel><h2 id="contact-title">O primeiro passo<br />é <em>ouvir você.</em></h2><p>Compartilhe sua dúvida ou solicite um atendimento. Uma conversa pode trazer mais clareza para o próximo passo.</p><div className="contact-channels">{siteConfig.phone && <div><Phone size={19} strokeWidth={1.3} aria-hidden="true" /><div><span>Telefone</span>{<a href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`}>{siteConfig.phone}</a>}</div></div>}{siteConfig.email && <div><Mail size={19} strokeWidth={1.3} aria-hidden="true" /><div><span>E-mail</span>{<a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>}</div></div>}{siteConfig.address && <div><MapPin size={20} strokeWidth={1.3} aria-hidden="true" /><div><span>Escritório</span><p>{siteConfig.address}</p></div></div>}</div>{whatsappUrl ? <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="button button-outline whatsapp-contact"><MessageCircle size={18} aria-hidden="true" />Converse pelo WhatsApp<ArrowUpRight size={16} aria-hidden="true" /></a> : null}</Reveal><ContactForm configured={contactIsConfigured(getContactEnvironment())} initialArea={initialArea} /></div></section>;
}
