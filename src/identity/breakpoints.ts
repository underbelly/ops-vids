export const breakpointValues = {
  TABLET: 768,
  TABLET_HD: 1024,
  DESKTOP: 1200,
  DESKTOP_HD: 1440,
};

export const breakpoints = {
  TABLET: `@media (min-width: ${breakpointValues.TABLET}px)`,
  TABLET_HD: `@media (min-width: ${breakpointValues.TABLET_HD}px)`,
  DESKTOP: `@media (min-width: ${breakpointValues.DESKTOP}px)`,
  DESKTOP_HD: `@media (min-width: ${breakpointValues.DESKTOP_HD}px)`,
};
