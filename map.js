export const create = entries => new Map(entries);

export const clear = map => (map.clear(), map);
export const entries = map => map.entries();
export const keys = map => map.keys();
export const values = map => map.values();

export const loop = (map, fn) => map.forEach(fn, context);
export const loop$ = map => fn => loop(map, fn, context);
export const loop_by = (fn, map) => loop(map, fn, context);
export const loop_by$ = fn => map => loop(map, fn, context);

export {
  loop as foreach,
  loop$ as foreach$,
  loop_by as foreach_by,
  loop_by$ as foreach_by$,
};

export const get = (map, index) => map.get(index);
export const get$ = map => index => get(map, index);
export const get_by = (index, map) => get(map, index);
export const get_by$ = index => map => get(map, index);

export const has = (set, value) => set.has(value);
export const has$ = set => value => has(set, value);
export const has_by = (value, set) => has(set, value);
export const has_by$ = value => set => has(set, value);

export const remove = (map, index) => map.delete(index);
export const remove$ = map => index => remove(map, index);
export const remove_by = (index, map) => remove(map, index);
export const remove_by$ = index => map => remove(map, index);

export {
  remove as del,
  remove$ as del$,
  remove_by as del_by,
  remove_by$ as del_by$,
};

export const set = (collection, index, value) => collection.set(index, value);
export const set$ = collection => index => value => set(collection, index, value);
export const set_by = (index, collection, value) => set(collection, index, value);
export const set_by$ = index => collection => value => set(collection, index, value);
