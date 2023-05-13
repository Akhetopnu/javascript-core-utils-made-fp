export const add = (set, value) => set.add(value);
export const add$ = set => value => add(set, value);
export const add_by = (value, set) => add(set, value);
export const add_by$ = value => set => add(set, value);

export const has = (set, value) => set.has(value);
export const has$ = set => value => has(set, value);
export const has_by = (value, set) => has(set, value);
export const has_by$ = value => set => has(set, value);

export const remove = (set, index) => set.delete(index);
export const remove$ = set => index => remove(set, index);
export const remove_by = (index, set) => remove(set, index);
export const remove_by$ = index => set => remove(set, index);

export const size = set => set.size;
export const clear = set => (set.clear(), set);

export const loop = (set, fn) => set.forEach(fn);
export const loop$ = set => fn => loop(set, fn);
export const loop_by = (fn, set) => loop(set, fn);
export const loop_by$ = fn => set => loop(set, fn);
