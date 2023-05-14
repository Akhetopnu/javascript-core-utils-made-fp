import { not } from './bool';
import { pipe2 } from './fn';

export const get = (object, key) => object[key];
export const get$ = object => key => get(object, key);
export const get_by = (key, object) => get(object, key);
export const get_by$ = key => object => get(object, key);

export const set = (object, key, value) => ((object[key] = value), object);
export const set$ = object => (key, value) => set(object, key, value);
export const set_by = (key, value, object) => set(object, key, value);
export const set_by$ = (key, value) => object => set(object, key, value);

// code minification service
export const entries = Object.entries;
export const keys = Object.keys;
export const values = Object.values;
export const from_entries = Object.fromEntries;

export const has = (object, key) => (key in object);
export const has$ = object => key => has(object, key);
export const has_by = key => object => has(object, key);
export const has_by$ = key => object => has(object, key);

export const has_own = (object, key) => object.hasOwn(key);
export const has_own$ = object => key => has_own(object, key);
export const has_own_by = key => object => has_own(object, key);
export const has_own_by$ = key => object => has_own(object, key);

export const is_instance_of = (object, constructor) => object instanceof constructor;
export const is_instance_of$ = object => constructor => is_instance_of(object, constructor);
export const is_instance_of_by = constructor => object => is_instance_of(object, constructor);
export const is_instance_of_by$ = constructor => object => is_instance_of(object, constructor);

export const define_property = (object, key, descriptor) => Object.defineProperty(object, key, descriptor);
export const define_property$ = object => (key, descriptor) => define_property(object, key, descriptor);
export const define_property_by = (key, descriptor) => object => define_property(object, key, descriptor);
export const define_property_by$ = (key, descriptor) => object => define_property(object, key, descriptor);

export const define_properties = (object, properties) => Object.defineProperties(object, properties);
export const define_properties$ = object => properties => define_properties(object, properties);
export const define_properties_by = (properties, object) => define_properties(object, properties);
export const define_properties_by$ = properties => object => define_properties(object, properties);

// TODO: add getOwnProperty*
// TODO: add other missing stuff
//
// too lazy to do it now

export const or = (a, b) => (a ?? b);
export const or$ = a => b => or(a, b);
export const or_by = b => a => or(a, b);
export const or_by$ = b => a => or(a, b);

export const seal = Object.seal;
export const freeze = Object.freeze;
export const prevent_extensions = Object.preventExtensions;

export const is_sealed = Object.isSealed;
export const is_frozen = Object.isFrozen;
export const is_extensible = Object.isExtensible;
export const is_rigid = pipe2(is_extensible, not);
export const is_defined = object => object != null;
export const is_null = object => object === null

export const get_this = function() { return this; };
