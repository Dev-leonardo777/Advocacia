import type { Metadata } from "next";
import type { ReactNode } from "react";
import { MotionProvider } from "@/components/providers/motion-provider";
import { siteConfig } from "@/config/site";
import { cormorantGaramond, dmSans } from "@/lib/fonts";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${cormorantGaramond.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
