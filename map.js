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

export const set = (collection, index, value) => collection.set(index, value);
export const set$ = collection => index => value => set(collection, index, value);
export const set_by = (index, collection, value) => set(collection, index, value);
export const set_by$ = index => collection => value => set(collection, index, value);
