export const then = (promise, fn) => promise.then(fn);
export const then$ = promise => fn => promise.then(fn);
export const then_by = (fn, promise) => promise.then(fn);
export const then_by$ = fn => promise => promise.then(fn);

export const then_catch = (promise, fn) => promise.catch(fn);
export const then_catch$ = promise => fn => promise.catch(fn);
export const then_catch_by = (fn, promise) => promise.catch(fn);
export const then_catch_by$ = fn => promise => promise.catch(fn);
