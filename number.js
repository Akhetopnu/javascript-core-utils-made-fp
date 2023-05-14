export const modulo = (a, b) => a % b;
export const modulo$ = a => b => a % b;
export const modulo_by = (b, a) => a % b;
export const modulo_by$ = b => a => a % b;

export {
  modulo as mod,
  modulo$ as mod$,
  modulo_by as mod_by,
  modulo_by$ as mod_by$,
};

export const gt = (a, b) => a > b;
export const gt$ = a => b => a > b;
export const gt_by = (b, a) => a > b;
export const gt_by$ = b => a => a > b;

export const gte = (a, b) => a >= b;
export const gte$ = a => b => a >= b;
export const gte_by = (b, a) => a >= b;
export const gte_by$ = b => a => a >= b;

export const lt = (a, b) => a < b;
export const lt$ = a => b => a < b;
export const lt_by = (b, a) => a < b;
export const lt_by$ = b => a => a < b;

export const lte = (a, b) => a <= b;
export const lte$ = a => b => a <= b;
export const lte_by = (b, a) => a <= b;
export const lte_by$ = b => a => a <= b;

export const plus = (a, b) => a + b;
export const plus$ = a => b => a + b;

export const minus = (a, b) => a - b;
export const minus$ = a => b => a - b;
export const minus_by = (b, a) => a - b;
export const minus_by$ = b => a => a - b;

export const multiply = (a, b) => a * b;
export const multiply$ = a => b => a * b;

export const divide = (a, b) => a / b;
export const divide$ = a => b => a / b;
export const divide_by = (b, a) => a / b;
export const divide_by$ = b => a => a / b;

export const shift_left = (a, b) => a << b;
export const shift_left$ = a => b => a << b;
export const shift_left_by = (b, a) => a << b;
export const shift_left_by$ = b => a => a << b;

export const shift_right = (a, b) => a >> b;
export const shift_right$ = a => b => a >> b;
export const shift_right_by = (b, a) => a >> b;
export const shift_right_by$ = b => a => a >> b;

export const shift_right_unsigned = (a, b) => a >>> b;
export const shift_right_unsigned$ = a => b => a >>> b;
export const shift_right_unsigned_by = (b, a) => a >>> b;
export const shift_right_unsigned_by$ = b => a => a >>> b;

export const power = (base, power) => base ** power;
export const power$ = base => power => base ** power;
export const power_by = (power, base) => base ** power;
export const power_by$ = power => base => base ** power;

export const bit_and = (a, b) => a & b;
export const bit_and$ = a => b => a & b;
export const bit_and_by = (b, a) => a & b;
export const bit_and_by$ = b => a => a & b;

export const bit_or = (a, b) => a | b;
export const bit_or$ = a => b => a | b;
export const bit_or_by = (b, a) => a | b;
export const bit_or_by$ = b => a => a | b;

export const bit_xor = (a, b) => (a ^ b);
export const bit_xor$ = a => b => (a ^ b);
export const bit_xor_by = (b, a) => (a ^ b);
export const bit_xor_by$ = b => a => (a ^ b);

export const bit_not = a => ~a;

export const is_nan = Number.isNaN;
export const is_finite = Number.isFinite;

export const force = a => +a;
export const parse_int = (string, radix) => parseInt(string, radix);
export const parse_float = parseFloat;

// for monomorphism (copied from core.js)
export const eql = (a, b) => a === b;
export const eql$ = a => b => a === b;

export const eql_not = (a, b) => a !== b;
export const eql_not$ = a => b => a !== b;

export const equal = (a, b) => a == b;
export const equal$ = a => b => a == b;

export const equal_not = (a, b) => a != b;
export const equal_not$ = a => b => a != b;
