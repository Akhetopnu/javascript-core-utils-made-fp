# javascript-core-utils-made-fp

This package has *0* external dependencies. It's literally as simple as it gets.

I made it because after looking at the source code of Ramda and other packages the hair at the back of my neck
decided to stand up, walk to the nearest corner and cry itself to death.

Not sure why they can't just write a normal function for anything and keep wrapping everything in 1, 2 or more functions.

Also this package prefers arrow functions over `function` keyword for brevity.

There is no implicit currying anywhere. Most (?) functions have up to 4 versions (see example below).

The source code is very simple and easy to understand.

Have a look at it yourself.

So far there is (some) functionality for:
- arrays (loop/foreach, every, some, filter, reduce, at, etc)
- boolean logic (and, or, not, etc)
- functions (pipe, identity, always, memoize, etc)
- numbers (plus, minus, power, comparisons, etc)

Example from `array.js`:
```
export const includes = (string, substring, start) => string.includes(substring, start);
export const includes$ = string => (substring, start) => includes(string, substring, start);
export const includes_by = (substring, start, string) => includes(string, substring, start);
export const includes_by$ = (substring, start) => string => includes(string, substring, start);

```

In this case the base name `includes` is a function that takes the data being operated on + the remaining arguments.

The `$` sign signifies partial application or currying.

The `_by` postfix signifies that we pass the remaining arguments first and the actual data last;

This way every scenario is covered. Most of these functions will probably never get used, but at the moment of writing this README
I'm not sure which versions will be used the most so I'm adding all combinations for now.

This entire package operates with these 3 rules in mind.
