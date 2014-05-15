# `dload.js`

*Code snippets for dynamically loading JavaScript and CSS*

They do not need any extra dependencies.


## Usage

To use `dload.js` directly, include the following code:

```html
<script src='http://livibetter.github.io/dload.js/dload.js'></script>
```

Loading or injecting can be used like:

```js
load_CSS('http://example.com/example.css');
inject_CSS('body { font-size: 2em }', some_callback);
load_JS('http://example.com/example.js', another_callback);
```


## Functions

### CSS

function | arguments
--- | ---
`load_CSS(src, cb)` | string of CSS URL, callback function
`inject_CSS(css, cb)` | string of CSS code , callback function

### JavaScript

function | arguments
--- | ---
`load_JS(src, cb)` | string of JavaScript URL, callback function


## Tests

[Tests][] are included, running tests needs jQuery and QUnit.

[Tests]: http://livibetter.github.io/dload.js/tests/tests.html


## History

In March, 2013, I (@livibetter) created a [Gist][] hosting `dload.js`, I need those functions for my blog. The reason for loading JavaScript and CSS this way is because I don't want to web browsers to load the external files for posts when a reader doesn't intend to see a live action.

[Gist]: https://gist.github.com/livibetter/5211293

May, 2014, a year later, after many times of copy-and-pasting to some posts, duplicating same code over and over. I think it might be better to have a simpler way to include these functions with just a one-liner.


## Contributing

Feel free to fork, but if you create a pull request, that means you agree to also put your changes in public domain and licensed under the same license.


## Public Domain

This repository is placed in public domain and licensed under [Unlicense][] if a license is required.

[Unlicense]: UNLICENSE
