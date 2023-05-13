export const gt = (a, b) => a > b;
export const gt$ = a => b => a > b;

export const gte = (a, b) => a >= b;
export const gte$ = a => b => a >= b;

export const lt = (a, b) => a < b;
export const lt$ = a => b => a < b;

export const lte = (a, b) => a <= b;
export const lte$ = a => b => a <= b;

export const plus = (a, b) => a + b;
export const plus$ = a => b => a + b;

export const minus = (a, b) => a + b;
export const minus$ = a => b => a - b;

export const multiply = (a, b) => a * b;
export const multiply$ = a => b => a * b;

export const power = (base, power) => base ** power;
export const power$ = base => power => base ** power;
export const power_by = (power, base) => base ** power;
export const power_by$ = power => base => base ** power;

export const divide = (a, b) => a / b;
export const divide$ = a => b => a / b;

export const nan = Number.isNaN;
export const finite = Number.isFinite;

export const force = a => +a;
export const parse_int = (string, radix) => parseInt(string, radix);
export const parse_float = parseFloat;
