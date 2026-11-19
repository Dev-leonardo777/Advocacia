export const siteConfig = {
  name: "Valença Advogados",
  description: "Direito Civil, Trabalhista e Previdenciário. Conheça a proposta de atuação do Valença Advogados e entre em contato.",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || "",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE?.trim() || "",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "") || "",
  address: process.env.NEXT_PUBLIC_OFFICE_ADDRESS?.trim() || "",
  registration: process.env.NEXT_PUBLIC_OAB_REGISTRATION?.trim() || "",
} as const;

export const navigation = [
  { label: "Início", href: "/#inicio", id: "inicio" },
  { label: "O escritório", href: "/#escritorio", id: "escritorio" },
  { label: "Áreas de atuação", href: "/#atuacao", id: "atuacao" },
  { label: "Equipe", href: "/#equipe", id: "equipe" },
  { label: "Diferenciais", href: "/#diferenciais", id: "diferenciais" },
  { label: "Contato", href: "/#contato", id: "contato" },
] as const;

export function getWhatsAppUrl() {
  if (!/^\d{10,15}$/.test(siteConfig.whatsapp)) return null;
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Olá, gostaria de conversar com o Valença Advogados sobre um atendimento.")}`;
}
