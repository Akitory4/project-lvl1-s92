let rules;
let handler;
export const game = (r, h) => {
  rules = r;
  handler = h;
};

export const getRules = () => rules;

export const next = () => handler();
