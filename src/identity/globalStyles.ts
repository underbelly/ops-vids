import { createGlobalStyle } from "styled-components";

import { createCSSVariables } from "@lib/createCSSVariables";
import { colors } from "@identity/colors";
import { constants, fontWeights } from "@identity/constants";
import { motion } from "@identity/motion";
import { spacing } from "@identity/spacing";

export const colorsCSS = createCSSVariables(colors, "colors");
export const constantsCSS = createCSSVariables(constants, "constants");
export const fontWeightsCSS = createCSSVariables(fontWeights, "fontWeights");
export const motionCSS = createCSSVariables(motion, "motion");
export const spacingCSS = createCSSVariables(spacing, "spacing");

export const GlobalStyles = createGlobalStyle`
  :root {
    ${colorsCSS}
    ${constantsCSS}
    ${fontWeightsCSS}
    ${motionCSS}
    ${spacingCSS}
  }
  #__next {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    touch-action: manipulation;
    
  background: linear-gradient(
    45deg,
    var(--colors-blue),
    var(--colors-red),
    var(--colors-yellow)
  );
  }
  * {
    box-sizing: border-box;
  }
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  main {
    flex: 1 0 auto;
  }
  header {
    flex-shrink:0;
    z-index: 1000;
  }
  footer {
    flex-shrink: 0;
    z-index: 1000;
  }
  body {
    line-height: 1;
    font-weight: 300;
    font-family: 'Graphik', sans-serif;
    position: relative;
    display: flex;
    flex-direction: column;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  html, body, #__next {
    height: 100%;
  }
`;
