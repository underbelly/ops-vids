type CSSVariableMap = Record<string, string>;
type CSSBreakpointVariableMap = Record<string, CSSVariableMap>;

const getCSS = (key: string, value: string, prefix?: string) =>
  `--${prefix ? `${prefix}-${key}` : key}: ${value};`;

export const createCSSVariables = (
  obj: CSSVariableMap | CSSBreakpointVariableMap,
  prefix?: string
): string =>
  Object.entries(obj).reduce((acc, [key, value]) => {
    if (typeof value === "object") {
      if (key === "default") {
        return `${acc}
          ${createCSSVariables(value, prefix)}`;
      }
      return `${acc}
        ${key} {
          ${createCSSVariables(value, prefix)}
        }`;
    }
    return `${acc}
      ${getCSS(key, value, prefix)}`;
  }, "");
