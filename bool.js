export const and = (a, b) => a && b;
export const and$ = a => b => a && b;

export const or = (a, b) => a || b;
export const or$ = a => b => a || b;

export const not = a => !a;
export const truth = a => !!a;
export const from = Boolean;
