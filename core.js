export const eq = Object.is;
export const eq$ = a => b => Object.is(a, b);

export const eq_not = (a, b) => !eq(a, b);
export const eq_not$ = a => b => !Object.is(a, b);

export const eql = (a, b) => a === b;
export const eql$ = a => b => a === b;

export const eql_not = (a, b) => a !== b;
export const eql_not$ = a => b => a !== b;

export const equal = (a, b) => a == b;
export const equal$ = a => b => a == b;

export const equal_not = (a, b) => a != b;
export const equal_not$ = a => b => a != b;

// export const contains = (collection, value) => collection.contains(value);
// export const contains$ = collection => value => contains(collection, value);
// export const contains_by = (value, collection) => contains(collection, value);
// export const contains_by$ = value => collection => contains(collection, value);
