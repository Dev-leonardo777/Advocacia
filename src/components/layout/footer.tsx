import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Brand } from "@/components/ui/brand";
import { navigation, siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <Brand footer />
          <nav aria-label="Navegação do rodapé">{navigation.slice(1).map((item) => <Link key={item.id} href={item.href}>{item.label}</Link>)}</nav>
          <Link href="/#inicio" className="back-top">Voltar ao início <ArrowUpRight size={17} aria-hidden="true" /></Link>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Valença Advogados.<br /><span>{siteConfig.registration || "Registro OAB da sociedade: a informar."}</span></p>
          <p>Conteúdo informativo. Não substitui uma consulta jurídica.<br /><span>Fotografias de ambientes ilustrativas, geradas por IA.</span></p>
          <Link href="/privacidade">Privacidade</Link>
        </div>
      </div>
    </footer>
  );
}
