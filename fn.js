import * as array from './array';

export const always = value => () => value;

export const call = (data, fn) => fn(data);
export const call$ = data => fn => fn(data);
export const call_by = (fn, data) => fn(data);
export const call_by$ = fn => data => fn(data);

export const identity = x => x;
export const noop = () => {};
export const is = x => typeof x === 'function';

export const after = (fn1, fn2) => () => {
  fn1();
  fn2();
};

export const before = (fn1, fn2) => () => {
  fn2();
  fn1();
};

export const when = (check, then) => data => check(data) && then(data);
export const unless = (check, then) => data => !check(data) && then(data);

export const pipex = (x, fn) => fn(x);
export const pipe2 = (fn1, fn2) => data => fn2(fn1(data));
export const pipe3 = (fn1, fn2, fn3) => data => fn3(fn2(fn1(data)));
export const pipe4 = (fn1, fn2, fn3, fn4) => data => fn4(fn3(fn2(fn1(data))));
export const pipe5 = (fn1, fn2, fn3, fn4, fn5) => data => fn5(fn4(fn3(fn2(fn1(data)))));
export const pipe6 = (fn1, fn2, fn3, fn4, fn5, fn6) => data => fn6(fn5(fn4(fn3(fn2(fn1(data))))));
export const pipe7 = (fn1, fn2, fn3, fn4, fn5, fn6, fn7) => data => fn7(fn6(fn5(fn4(fn3(fn2(fn1(data)))))));
export const pipe8 = (fn1, fn2, fn3, fn4, fn5, fn6, fn7, fn8) => data => fn8(fn7(fn6(fn5(fn4(fn3(fn2(fn1(data))))))));
// export const pipe = (...fns) => data => fns.reduce(pipex, data);
const pipeN = fns => data => array.reduce(fns, pipex, data);

const pipes = [
  identity,
  identity,
  pipe2,
  pipe3,
  pipe4,
  pipe5,
  pipe6,
  pipe7,
  pipe8,
];

// this could be written using a bunch of undefined checks
// a bit risky probably
export const pipe = (...fns) => {
  const len = array.len(fns);
  const fn = pipes[len];
  if (len === 0) {
    return fn;
  } else if (fn) {
    return fn(...fns);
  } else {
    return pipeN(fns);
  }
};

export const memoize = fn =>
  (cache => x => (x in cache ? cache[x] : (cache[x] = fn(x))))(
    object.create(),
  );
