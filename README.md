# javascript-core-utils-made-fp

This package has __0__ external dependencies. It's literally as simple as it gets.

I made it because after looking at the source code of Ramda and other packages the hair at the back of my neck
decided to stand up, walk to the nearest corner and cry itself to death.

Not sure why they can't just write a normal function for anything and keep wrapping everything in 1, 2 or more functions.

Also this package prefers arrow functions over `function` keyword for brevity.

There is no implicit currying anywhere. Most (?) functions have up to 4 versions (see example below).

There is no hidden or changed behavior anywhere. This package is just an extremely thin and functional 'proxy' layer over the 
core utils available in javascript like Maps, strings, numbers etc.

The only thing I changed is I gave some functions better (in my opinion, obviously) names. That's it.

The source code is very simple and easy to understand.

Have a look at it yourself.

# Implemented functionality so far

So far there is (some) functionality for:
- arrays (`loop/foreach`, `every`, `some`, `filter`, `reduce`, `at`, etc)
- boolean logic (`and`, `or`, `not`, etc)
- functions (`pipe`, `identity`, `always`, `memoize`, etc)
- json (`read`, `write`, `read_safe`, etc)
- maps (`get`, `set`, `has`, etc)
- objects (`create`, `keys`, `values`, etc)
- numbers (`plus`, `minus`, `power`, `comparisons`, etc)
- promises (`then`, `then_catch`)
- sets (`add`, `has`, etc)
- strings (`upper`, `lower`, `ends_with`, `index_of`, etc)

# Sample/preview of the source code

Example from `array.js`:
```
export const includes = (string, substring, start) => string.includes(substring, start);
export const includes$ = string => (substring, start) => includes(string, substring, start);
export const includes_by = (substring, start, string) => includes(string, substring, start);
export const includes_by$ = (substring, start) => string => includes(string, substring, start);

```

1. In this case the base name `includes` is a function that takes the data being operated on + the remaining arguments.
2. The `$` sign signifies partial application or currying.
3. The `_by` postfix signifies that we pass the remaining arguments first and the actual data last;

This way every scenario is covered. Most of these functions will probably never get used, but at the moment of writing this README
I'm not sure which versions will be used the most so I'm adding all combinations for now.

The `includes_by` variation is probably the least interesting, but it's there in case someone wants it for some reason xd.

This entire package operates with these 3 rules in mind.

# Why is the package name soo looooonggggggguh

Since I gave this package a rather lengthy name, here's a link to StackOverflow describing how you can [give it a shorter alias of your choosing](https://stackoverflow.com/questions/56134857/how-to-install-npm-package-under-alias-or-different-name).

In case you're lazy here's the excerpt:

`npm i myalias@npm:javascript-core-utils-made-fp`

`npm i myalias-1.1.0@npm:javascript-core-utils-made-fp@1.1.0`

Or edit `package.json`:

``` json
"dependencies": {
  "javascript-core-utils-made-fp": "npm:javascript-core-utils-made-fp@1.1.0",
  "myalias": "npm:javascript-core-utils-made-fp@1.1.0"
}
```

And then in your code:

``` javascript
const fp = require('myalias');
```

I'm feeling lazy at the moment of writing this, so I haven't checked these (yet) myself, I just copied them over from stack overflow.

I'm a curious person tho so I'll probably verify it at some point (soon) : }
