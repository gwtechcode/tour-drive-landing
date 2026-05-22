"use client";

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --color-ink: #111315;
    --color-muted: #687078;
    --color-line: #dfe4e8;
    --color-surface: #ffffff;
    --color-soft: #f5f7f8;
    --color-accent: #0f8b8d;
    --color-accent-dark: #0a6668;
    --color-warm: #f4b860;
    --shadow-soft: 0 24px 70px rgba(17, 19, 21, 0.12);
    --max-width: 1180px;
  }

  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    color: var(--color-ink);
    background: var(--color-surface);
    font-family: Arial, Helvetica, sans-serif;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button,
  input,
  textarea {
    font: inherit;
  }

  img {
    max-width: 100%;
  }

  ::selection {
    background: rgba(15, 139, 141, 0.2);
  }
`;
