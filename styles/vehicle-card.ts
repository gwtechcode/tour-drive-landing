"use client";

import styled from "styled-components";

export const Card = styled.article`
  border: 1px solid var(--color-line);
  border-radius: 8px;
  overflow: hidden;
  transition: border-color 160ms ease, transform 160ms ease, box-shadow 160ms ease;

  &:hover {
    border-color: rgba(15, 139, 141, 0.42);
    box-shadow: var(--shadow-soft);
    transform: translateY(-2px);
  }
`;

export const ImageWrap = styled.div`
  aspect-ratio: 16 / 10;
  background: var(--color-soft);
  position: relative;

  img {
    object-fit: cover;
  }
`;

export const Category = styled.span`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 999px;
  color: var(--color-ink);
  font-size: 0.8rem;
  font-weight: 700;
  left: 14px;
  padding: 8px 11px;
  position: absolute;
  top: 14px;
`;

export const CardBody = styled.div`
  display: grid;
  gap: 20px;
  padding: 22px;
`;

export const CardTitle = styled.div`
  align-items: start;
  display: grid;
  gap: 18px;
  grid-template-columns: minmax(0, 1fr) auto;

  h3 {
    font-size: 1.35rem;
    margin: 0 0 8px;
  }

  p {
    color: var(--color-muted);
    line-height: 1.55;
    margin: 0;
  }

  strong {
    color: var(--color-accent-dark);
    white-space: nowrap;
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

export const FeatureList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    background: var(--color-soft);
    border-radius: 999px;
    color: var(--color-muted);
    font-size: 0.84rem;
    padding: 8px 10px;
  }
`;

export const CardAction = styled.a`
  align-items: center;
  border-top: 1px solid var(--color-line);
  display: inline-flex;
  font-weight: 700;
  gap: 8px;
  justify-content: space-between;
  padding-top: 18px;
  transition: color 160ms ease;

  &:hover {
    color: var(--color-accent-dark);
  }
`;
