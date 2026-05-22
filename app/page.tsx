import { FaArrowRight, FaCalendarCheck, FaCarSide, FaCreditCard, FaGaugeHigh, FaGithub, FaWhatsapp } from "react-icons/fa6";
import { Header } from "@/components/Header";
import { VehicleCard } from "@/components/VehicleCard";
import siteContent from "@/content/site.json";
import { createWhatsAppUrl } from "@/lib/integrations/whatsapp";
import * as S from "@/styles/page";

export default function Home() {
  const whatsappUrl = createWhatsAppUrl({
    phone: siteContent.brand.whatsapp,
    message: `Ola! Quero conhecer as opcoes de locacao da ${siteContent.brand.name}.`
  });

  return (
    <S.Page>
      <Header brand={siteContent.brand} whatsappUrl={whatsappUrl} />

      <main>
        <S.Hero>
          <S.HeroContent>
            <S.Eyebrow>{siteContent.hero.eyebrow}</S.Eyebrow>
            <h1>{siteContent.hero.title}</h1>
            <p>{siteContent.hero.description}</p>

            <S.Actions>
              <S.PrimaryLink href="#veiculos">
                {siteContent.hero.primaryCta}
                <FaArrowRight aria-hidden />
              </S.PrimaryLink>
              <S.SecondaryLink href={whatsappUrl} target="_blank" rel="noreferrer">
                <FaWhatsapp aria-hidden />
                {siteContent.hero.secondaryCta}
              </S.SecondaryLink>
            </S.Actions>

            <S.Metrics aria-label="Indicadores de atendimento">
              {siteContent.metrics.map((metric) => (
                <S.Metric key={metric.label}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </S.Metric>
              ))}
            </S.Metrics>
          </S.HeroContent>

          <S.HeroVisual aria-label="Veiculo premium em viagem turistica">
            <S.VisualPanel>
              <S.Availability>
                <span>Disponibilidade hoje</span>
                <strong>28 veiculos</strong>
              </S.Availability>
              <S.RouteCard>
                <FaGaugeHigh aria-hidden />
                <div>
                  <span>Roteiro sugerido</span>
                  <strong>Aeroporto {"->"} Hotel {"->"} Litoral</strong>
                </div>
              </S.RouteCard>
            </S.VisualPanel>
          </S.HeroVisual>
        </S.Hero>

        <S.Section id="veiculos">
          <S.SectionHeader>
            <S.Eyebrow>Frota curada</S.Eyebrow>
            <h2>Escolha por experiencia de viagem.</h2>
            <p>Cards prontos para o cliente ajustar fotos, valores e descricoes pelo CMS simples do projeto.</p>
          </S.SectionHeader>

          <S.VehicleGrid>
            {siteContent.vehicles.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} whatsappUrl={whatsappUrl} />
            ))}
          </S.VehicleGrid>
        </S.Section>

        <S.BenefitBand>
          <S.SectionHeader>
            <S.Eyebrow>Operacao preparada</S.Eyebrow>
            <h2>Minimalista na tela, robusta na arquitetura.</h2>
          </S.SectionHeader>

          <S.BenefitGrid>
            {siteContent.benefits.map((benefit, index) => {
              const icons = [FaCalendarCheck, FaCreditCard, FaCarSide];
              const Icon = icons[index] ?? FaCarSide;

              return (
                <S.Benefit key={benefit.title}>
                  <Icon aria-hidden />
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </S.Benefit>
              );
            })}
          </S.BenefitGrid>
        </S.BenefitBand>

        <S.CmsSection>
          <S.CmsCopy>
            <S.Eyebrow>CMS do cliente</S.Eyebrow>
            <h2>Conteudo editavel sem tocar na programacao.</h2>
            <p>
              A primeira versao usa o arquivo <code>content/site.json</code> como CMS simples. Ele centraliza frota,
              precos, textos, contato e perguntas frequentes, facilitando a evolucao para um painel administrativo.
            </p>
          </S.CmsCopy>
          <S.CmsList>
            <li>Catalogo de veiculos e imagens</li>
            <li>Valores diarios e descricoes comerciais</li>
            <li>WhatsApp, e-mail, GitHub e Vercel</li>
            <li>Blocos de beneficios e FAQ</li>
          </S.CmsList>
        </S.CmsSection>

        <S.FaqSection>
          <S.SectionHeader>
            <S.Eyebrow>Duvidas rapidas</S.Eyebrow>
            <h2>Pronto para lancar e evoluir.</h2>
          </S.SectionHeader>

          <S.FaqGrid>
            {siteContent.faqs.map((faq) => (
              <S.FaqItem key={faq.question}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </S.FaqItem>
            ))}
          </S.FaqGrid>
        </S.FaqSection>
      </main>

      <S.Footer>
        <span>{siteContent.brand.name} - {siteContent.brand.tagline}</span>
        <a href={siteContent.brand.github} target="_blank" rel="noreferrer">
          <FaGithub aria-hidden />
          GitHub gwtechcode
        </a>
      </S.Footer>
    </S.Page>
  );
}
