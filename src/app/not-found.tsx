import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Brand } from "@/components/ui/brand";

export default function NotFound() {
  return <main className="error-page"><Brand /><p className="eyebrow">Página não encontrada · 404</p><h1>Podemos encontrar<br /><em>outro caminho.</em></h1><p>A página que você procura não está disponível.</p><Link className="button button-gold" href="/"><ArrowLeft size={17} aria-hidden="true" />Voltar ao início</Link></main>;
}
