export const at = (array, index) => array.at(index);
export const at$ = array => index => at(array, index);
export const at_by = (index, array) => at(array, index);
export const at_by$ = index => array => at(array, index);

export const at_0 = at_by(0);
export const at_1 = at_by(1);
export const at_2 = at_by(2);
export const at_3 = at_by(3);
export const at_4 = at_by(4);
export const at_5 = at_by(5);
export const at_6 = at_by(6);
export const at_7 = at_by(7);
export const at_8 = at_by(8);
export const at_9 = at_by(9);

export const concat = (a, b) => a.concat(b);
export const concat$ = a => b => concat(a, b);

export const copy = (array, index, value) => array.with(index, value);
export const copy$ = array => (index, value) => copy(array, index, value);
export const copy_by = (index, value) => array => copy(array, index, value);
export const copy_by$ = (index, value) => array => copy(array, index, value);

export const copy_from = (arraylike, fn, context) => Array.from(arraylike, fn, context);
export const copy_from$ = arraylike => (fn, context) => from(arraylike, fn, context);
export const copy_from_by = (fn, context) => arraylike => from(arraylike, fn, context);
export const copy_from_by$ = (fn, context) => arraylike => from(arraylike, fn, context);

export const copy_within = (array, index, start, end) => array.copyWithin(array, index, start, end);
export const copy_within$ = array => (index, start, end) => copy_within(array, index, start, end);
export const copy_within_by = (index, start, end) => array => copy_within(array, index, start, end);
export const copy_within_by$ = (index, start, end) => array => copy_within(array, index, start, end);

export const every = (array, fn, context) => array.every(fn, context);
export const every$ = array => (fn, context) => every(array, fn, context);
export const every_by = (fn, context, array) => every(array, fn, context);
export const every_by$ = (fn, context) => array => every(array, fn, context);

export const fill = (array, value, start, end) => array.fill(value, start, end);
export const fill$ = array => (value, start, end) => filter(array, value, start, end);
export const fill_by = (value, start, end, array) => filter(array, value, start, end);
export const fill_by$ = (value, start, end) => array => filter(array, value, start, end);

export const filter = (array, fn, context) => array.filter(fn, context);
export const filter$ = array => (fn, context) => filter(array, fn, context);
export const filter_by = (fn, context, array) => filter(array, fn, context);
export const filter_by$ = (fn, context) => array => filter(array, fn, context);

export const find = (array, fn, context) => array.find(fn, context);
export const find$ = array => (fn, context) => find(array, fn, context);
export const find_by = (fn, context, array) => find(array, fn, context);
export const find_by$ = (fn, context) => array => find(array, fn, context);

export const find_last = (array, fn, context) => array.findLast(fn, context);
export const find_last$ = array => (fn, context) => find_last(array, fn, context);
export const find_last_by = (fn, context, array) => find_last(array, fn, context);
export const find_last_by$ = (fn, context) => array => find_last(array, fn, context);

export const find_index = (array, fn, context) => array.findIndex(fn, context);
export const find_index$ = array => (fn, context) => find_index(array, fn, context);
export const find_index_by = (fn, context, array) => find_index(array, fn, context);
export const find_index_by$ = (fn, context) => array => find_index(array, fn, context);

export const find_index_last = (array, fn, context) => array.findLastIndex(fn, context);
export const find_index_last$ = array => (fn, context) => find_index_last(array, fn, context);
export const find_index_last_by = (fn, context, array) => find_index_last(array, fn, context);
export const find_index_last_by$ = (fn, context) => array => find_index_last(array, fn, context);

export const flatten = (array, depth) => array.flat(depth);
export const flatten$ = array => depth => flatten(array, depth);
export const flatten_by = (depth, depth) => flatten(array, depth);
export const flatten_by$ = depth => array => flatten(array, depth);

export const loop = (array, fn) => array.forEach(fn, context);
export const loop$ = array => fn => loop(array, fn, context);
export const loop_by = (fn, array) => loop(array, fn, context);
export const loop_by$ = fn => array => loop(array, fn, context);

export {
  loop as foreach,
  loop$ as foreach$,
  loop_by as foreach_by,
  loop_by$ as foreach_by$,
};

export const includes = (array, value) => array.includes(value);
export const includes$ = array => value => includes(array, value);
export const includes_by = (value, array) => includes(array, value);
export const includes_by$ = value => array => includes(array, value);

export const is = Array.isArray;

export const join = (array, separator) => array.join(separator);
export const join$ = array => separator => join(array, separator);
export const join_by = (separator, array) => join(array, separator);
export const join_by$ = separator => array => join(array, separator);

export const len = array => array.length;

export const resize = (array, len) => ((array.length = len), array);
export const resize$ = array => len => resize(array, len);
export const resize_by = (len, array) => resize(array, len);
export const resize_by$ = len => array => resize(array, len);

export const map_flat = (array, fn, context) => array.flatMap(fn, context);
export const map_flat$ = array => (fn, context) => map_flat(array, fn, context);
export const map_flat_by = (fn, context, array) => map_flat(array, fn, context);
export const map_flat_by$ = (fn, context) => array => map_flat(array, fn, context);

export const map = (array, fn, context) => array.map(fn, context);
export const map$ = array => (fn, context) => map(array, fn, context);
export const map_by = (fn, array) => map(array, fn, context);
export const map_by$ = (fn, context) => array => map(array, fn, context);

export const push = (array, value) => array.push(value);
export const push$ = array => value => push(array, value);
export const push_by = (value, array) => push(array, value);
export const push_by$ = value => array => push(array, value);

export const push_start = (array, value) => array.unshift(value);
export const push_start$ = array => value => push_start(array, value);
export const push_start_by = (value, array) => push_start(array, value);
export const push_start_by$ = value => array => push_start(array, value);

export const slice_from = (arraylike, start) => arraylike.slice(start);
export const slice_from$ = arraylike => start => slice_from(arraylike, start);
export const slice_from_by = (start, arraylike) => slice_from(arraylike, start);
export const slice_from_by$ = start => arraylike => slice_from(arraylike, start);

export const slice_between = (arraylike, start, end) => arraylike.slice(start, end);
export const slice_between$ = arraylike => (start, end) => slice_between(arraylike, start, end);
export const slice_between_by = (start, end, arraylike) => slice_between(arraylike, start, end);
export const slice_between_by$ = (start, end) => arraylike => slice_between(arraylike, start, end);

export const reduce = (array, fn, value, context) => array.reduce(fn, value, context);
export const reduce$ = array => (fn, value, context) => reduce(array, fn, value, context);
export const reduce_by = (fn, value, context) => array => reduce(array, fn, value, context);
export const reduce_by$ = (fn, value, context) => array => reduce(array, fn, value, context);

export const reduce_right = (array, fn, value, context) => array.reduceRight(fn, value, context);
export const reduce_right$ = array => (fn, value, context) => reduce_right(array, fn, value, context);
export const reduce_right_by = (fn, value, context) => array => reduce_right(array, fn, value, context);
export const reduce_right_by$ = (fn, value, context) => array => reduce_right(array, fn, value, context);

export const some = (array, fn, context) => array.some(fn, context);
export const some$ = array => (fn, context) => some(array, fn, context);
export const some_by = (fn, context, array) => some(array, fn, context);
export const some_by$ = (fn, context) => array => some(array, fn, context);

export const sort = (array, fn) => array.sort(fn);
export const sort$ = array => fn => sort(array, fn);
export const sort_by = fn => array => sort(array, fn);
export const sort_by$ = fn => array => sort(array, fn);

export const copy_reversed = array => array.toReversed();
export const copy_sorted = array => array.toSorted();
// export const copy_sliced = (array, count, item1, item2, ite => array.toSorted();
export const of = Array.of;
export const pop = array => array.pop();
export const pop_start = array => array.shift();
export const reverse = array => array.reverse();
export const values = array => array.values();
