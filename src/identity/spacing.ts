import { breakpoints } from "@identity/breakpoints";

export const spacing = {
  default: {
    xs: "8px",
    sm: "24px",
    md: "32px",
    lg: "48px",
    xl: "80px",
  },
  [breakpoints.DESKTOP]: {
    xs: "8px",
    sm: "24px",
    md: "40px",
    lg: "64px",
    xl: "96px",
  },
  [breakpoints.DESKTOP_HD]: {
    xs: "8px",
    sm: "24px",
    md: "40px",
    lg: "80px",
    xl: "120px",
  },
};
