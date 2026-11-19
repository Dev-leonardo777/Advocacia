import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = { title: "Privacidade" };

export default function PrivacyPage() {
  return <><Header solid /><main id="conteudo" className="legal-page container"><Link href="/#contato" className="text-link"><ArrowLeft size={17} aria-hidden="true" />Voltar ao contato</Link><p className="section-label">Seus dados</p><h1>Aviso de privacidade</h1><p className="legal-intro">Informações sobre o funcionamento do formulário de contato deste site.</p><h2>Informações solicitadas</h2><p>O formulário solicita nome, e-mail, assunto e mensagem. O telefone é opcional. Esses dados são utilizados para encaminhar sua solicitação e permitir uma resposta do escritório.</p><h2>Envio e tratamento</h2><p>Quando o canal estiver configurado, o servidor encaminhará a mensagem ao e-mail institucional por meio do serviço de envio Resend. O site não grava os textos das mensagens em um banco de dados próprio. As mensagens encaminhadas poderão permanecer na caixa de e-mail do escritório e nos sistemas envolvidos no envio.</p><h2>Preferências e proteção</h2><p>O envio exige sua autorização para o uso dos dados no atendimento desta solicitação. Evite compartilhar documentos, informações de saúde, dados financeiros ou outros dados sensíveis no primeiro contato. O site não utiliza ferramentas de publicidade ou análise de audiência nesta implementação.</p><h2>Contato sobre seus dados</h2><p>Para solicitar informações, correção ou exclusão de dados, utilize {siteConfig.email ? <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> : "o canal institucional, ainda a informar"}.</p><aside className="privacy-pending"><strong>Dados institucionais pendentes de preenchimento</strong><p>Razão social e identificação do responsável pelo tratamento, endereço, canal de privacidade e prazo de retenção deverão ser informados pelo escritório antes da publicação definitiva.</p></aside></main><Footer /></>;
}
