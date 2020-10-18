export const motionTiming = {
  animationTiming: [0.23, 1, 0.32, 1],
  animationDurationXXL: 1.0,
  animationDurationXL: 0.75,
  animationDurationL: 0.5,
  animationDurationM: 0.25,
  animationDurationS: 0.15,
  animationDurationXS: 0.1,

  childrenDurationL: 0.07,
  childrenDurationM: 0.05,
  childrenDurationS: 0.02,
};

const animationTiming = `cubic-bezier(${motionTiming.animationTiming.join()})`;
const animationDurationXL = `${motionTiming.animationDurationXL * 1000}ms`;
const animationDurationL = `${motionTiming.animationDurationL * 1000}ms`;
const animationDurationM = `${motionTiming.animationDurationM * 1000}ms`;
const animationDurationS = `${motionTiming.animationDurationS * 1000}ms`;

export const motion = {
  animationTiming,
  animationDurationXL,
  animationDurationL,
  animationDurationM,
  animationDurationS,
  transitionShort: `all ${animationDurationS} ${animationTiming}`,
  transitionMedium: `all ${animationDurationM} ${animationTiming}`,
  transitionLong: `all ${animationDurationL} ${animationTiming}`,
};
