"use client";

import styled from "styled-components";

export const Header = styled.header`
  align-items: center;
  backdrop-filter: blur(18px);
  background: rgba(255, 255, 255, 0.86);
  border-bottom: 1px solid rgba(223, 228, 232, 0.78);
  display: flex;
  justify-content: space-between;
  left: 0;
  margin: 0 auto;
  padding: 16px clamp(20px, 5vw, 56px);
  position: sticky;
  right: 0;
  top: 0;
  z-index: 10;

  @media (max-width: 720px) {
    align-items: flex-start;
    gap: 14px;
    position: static;
  }
`;

export const Brand = styled.a`
  align-items: center;
  display: inline-flex;
  gap: 12px;
  min-width: 190px;

  span {
    display: grid;
    gap: 2px;
  }

  strong {
    font-size: 0.98rem;
  }

  small {
    color: var(--color-muted);
    font-size: 0.78rem;
  }
`;

export const Logomark = styled.b`
  align-items: center;
  background: var(--color-ink);
  border-radius: 8px;
  color: #ffffff;
  display: inline-flex;
  height: 42px;
  justify-content: center;
  letter-spacing: 0;
  width: 42px;
`;

export const Nav = styled.nav`
  align-items: center;
  display: flex;
  gap: 8px;

  a {
    align-items: center;
    border-radius: 999px;
    color: var(--color-muted);
    display: inline-flex;
    font-size: 0.92rem;
    gap: 8px;
    min-height: 40px;
    padding: 0 14px;
    transition: background 160ms ease, color 160ms ease;
    white-space: nowrap;
  }

  a:hover {
    background: var(--color-soft);
    color: var(--color-ink);
  }

  a:last-child {
    background: var(--color-accent);
    color: #ffffff;
  }

  a:last-child:hover {
    background: var(--color-accent-dark);
    color: #ffffff;
  }

  @media (max-width: 720px) {
    flex-wrap: wrap;
    justify-content: flex-end;

    a {
      font-size: 0.86rem;
      min-height: 36px;
      padding: 0 10px;
    }
  }
`;
