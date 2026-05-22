import type { Metadata } from "next";
import StyledComponentsRegistry from "@/lib/styled-components/registry";
import { GlobalStyles } from "@/styles/global";
import siteContent from "@/content/site.json";

export const metadata: Metadata = {
  title: `${siteContent.brand.name} | ${siteContent.brand.tagline}`,
  description: siteContent.hero.description,
  openGraph: {
    title: `${siteContent.brand.name} | ${siteContent.brand.tagline}`,
    description: siteContent.hero.description,
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <StyledComponentsRegistry>
          <GlobalStyles />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
