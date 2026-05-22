"use client";

import styled from "styled-components";

export const Page = styled.div`
  min-height: 100vh;
  overflow-x: hidden;
`;

export const Hero = styled.section`
  display: grid;
  gap: clamp(28px, 5vw, 72px);
  grid-template-columns: minmax(0, 1.02fr) minmax(320px, 0.98fr);
  margin: 0 auto;
  max-width: var(--max-width);
  min-height: calc(100vh - 74px);
  padding: clamp(38px, 7vw, 88px) clamp(20px, 5vw, 40px) 44px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    min-height: auto;
    padding-top: 38px;
  }
`;

export const HeroContent = styled.div`
  align-self: center;

  h1 {
    font-size: clamp(2.7rem, 7vw, 5.9rem);
    letter-spacing: 0;
    line-height: 0.95;
    margin: 16px 0 22px;
    max-width: 760px;
  }

  p {
    color: var(--color-muted);
    font-size: clamp(1.02rem, 2vw, 1.22rem);
    line-height: 1.7;
    margin: 0;
    max-width: 620px;
  }
`;

export const Eyebrow = styled.span`
  color: var(--color-accent-dark);
  display: inline-flex;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 32px;
`;

export const PrimaryLink = styled.a`
  align-items: center;
  background: var(--color-ink);
  border-radius: 999px;
  color: #ffffff;
  display: inline-flex;
  font-weight: 700;
  gap: 10px;
  min-height: 50px;
  padding: 0 22px;
  transition: transform 160ms ease, background 160ms ease;

  &:hover {
    background: #000000;
    transform: translateY(-1px);
  }
`;

export const SecondaryLink = styled(PrimaryLink)`
  background: var(--color-soft);
  color: var(--color-ink);

  &:hover {
    background: #eaf0f1;
  }
`;

export const Metrics = styled.div`
  border-top: 1px solid var(--color-line);
  display: grid;
  gap: 18px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: 44px;
  max-width: 620px;
  padding-top: 24px;

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

export const Metric = styled.div`
  display: grid;
  gap: 4px;

  strong {
    font-size: 1.5rem;
  }

  span {
    color: var(--color-muted);
    font-size: 0.92rem;
    line-height: 1.35;
  }
`;

export const HeroVisual = styled.aside`
  align-self: stretch;
  background:
    linear-gradient(180deg, rgba(17, 19, 21, 0.08), rgba(17, 19, 21, 0.52)),
    url("https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=85") center/cover;
  border-radius: 8px;
  min-height: 620px;
  overflow: hidden;
  position: relative;

  @media (max-width: 900px) {
    min-height: 430px;
  }

  @media (max-width: 560px) {
    min-height: 360px;
  }
`;

export const VisualPanel = styled.div`
  bottom: 22px;
  display: grid;
  gap: 12px;
  left: 22px;
  max-width: calc(100% - 44px);
  position: absolute;
  right: 22px;
`;

export const Availability = styled.div`
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 8px;
  box-shadow: var(--shadow-soft);
  display: grid;
  gap: 4px;
  padding: 18px;
  width: min(260px, 100%);

  span {
    color: var(--color-muted);
    font-size: 0.86rem;
  }

  strong {
    font-size: 1.65rem;
  }
`;

export const RouteCard = styled.div`
  align-items: center;
  background: rgba(17, 19, 21, 0.82);
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 8px;
  color: #ffffff;
  display: flex;
  gap: 14px;
  padding: 16px;
  width: min(420px, 100%);

  svg {
    color: var(--color-warm);
    flex: 0 0 auto;
    font-size: 1.35rem;
  }

  div {
    display: grid;
    gap: 3px;
    min-width: 0;
  }

  span {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.84rem;
  }

  strong {
    font-size: 0.98rem;
    line-height: 1.35;
  }
`;

export const Section = styled.section`
  margin: 0 auto;
  max-width: var(--max-width);
  padding: 70px clamp(20px, 5vw, 40px);
`;

export const SectionHeader = styled.div`
  margin-bottom: 28px;
  max-width: 720px;

  h2 {
    font-size: clamp(2rem, 4vw, 3.4rem);
    letter-spacing: 0;
    line-height: 1;
    margin: 10px 0 14px;
  }

  p {
    color: var(--color-muted);
    font-size: 1.02rem;
    line-height: 1.65;
    margin: 0;
  }
`;

export const VehicleGrid = styled.div`
  display: grid;
  gap: 18px;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  @media (max-width: 840px) {
    grid-template-columns: 1fr;
  }
`;

export const BenefitBand = styled.section`
  background: var(--color-soft);
  padding: 76px clamp(20px, 5vw, 40px);

  > * {
    margin-left: auto;
    margin-right: auto;
    max-width: var(--max-width);
  }
`;

export const BenefitGrid = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  @media (max-width: 840px) {
    grid-template-columns: 1fr;
  }
`;

export const Benefit = styled.article`
  background: #ffffff;
  border: 1px solid var(--color-line);
  border-radius: 8px;
  padding: 24px;

  svg {
    color: var(--color-accent);
    font-size: 1.55rem;
  }

  h3 {
    font-size: 1.12rem;
    margin: 18px 0 10px;
  }

  p {
    color: var(--color-muted);
    line-height: 1.6;
    margin: 0;
  }
`;

export const CmsSection = styled.section.attrs({ id: "cms" })`
  align-items: start;
  display: grid;
  gap: 28px;
  grid-template-columns: minmax(0, 1fr) minmax(260px, 420px);
  margin: 0 auto;
  max-width: var(--max-width);
  padding: 76px clamp(20px, 5vw, 40px);

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;

export const CmsCopy = styled.div`
  h2 {
    font-size: clamp(2rem, 4vw, 3.2rem);
    line-height: 1;
    margin: 10px 0 18px;
  }

  p {
    color: var(--color-muted);
    font-size: 1.02rem;
    line-height: 1.7;
    margin: 0;
    max-width: 700px;
  }

  code {
    background: var(--color-soft);
    border-radius: 6px;
    color: var(--color-accent-dark);
    padding: 3px 6px;
  }
`;

export const CmsList = styled.ul`
  background: var(--color-ink);
  border-radius: 8px;
  color: #ffffff;
  display: grid;
  gap: 14px;
  list-style: none;
  margin: 0;
  padding: 24px;

  li {
    border-bottom: 1px solid rgba(255, 255, 255, 0.12);
    line-height: 1.45;
    padding-bottom: 14px;
  }

  li:last-child {
    border-bottom: 0;
    padding-bottom: 0;
  }
`;

export const FaqSection = styled(Section)`
  padding-top: 24px;
`;

export const FaqGrid = styled.div`
  display: grid;
  gap: 14px;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const FaqItem = styled.article`
  border-top: 1px solid var(--color-line);
  padding-top: 18px;

  h3 {
    font-size: 1.05rem;
    margin: 0 0 10px;
  }

  p {
    color: var(--color-muted);
    line-height: 1.6;
    margin: 0;
  }
`;

export const Footer = styled.footer`
  align-items: center;
  border-top: 1px solid var(--color-line);
  color: var(--color-muted);
  display: flex;
  gap: 14px;
  justify-content: space-between;
  margin: 0 auto;
  max-width: var(--max-width);
  padding: 26px clamp(20px, 5vw, 40px);

  a {
    align-items: center;
    color: var(--color-ink);
    display: inline-flex;
    font-weight: 700;
    gap: 8px;
  }

  @media (max-width: 640px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;
