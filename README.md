<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Venus Semidiameters

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Fifteen observations of the vertical semidiameter of Venus, made by Lieutenant Herndon, with the meridian circle at Washington, in the year 1846.

<section class="intro">

Herndon's observations are a classic dataset commonly used in examples demonstrating outlier detection.

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/datasets-herndon-venus-semidiameters
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).
-   To use as a general utility for the command line, install the corresponding [CLI package][cli-section] globally.

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var data = require( '@stdlib/datasets-herndon-venus-semidiameters' );
```

#### data()

Returns fifteen observations of the vertical semidiameter of Venus, made by Lieutenant Herndon, with the meridian circle at Washington, in the year 1846.

```javascript
var d = data();
// returns [ -0.30, -0.44, ..., 0.39, 0.10 ]
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var incrgrubbs = require( '@stdlib/stats-incr-grubbs' );
var data = require( '@stdlib/datasets-herndon-venus-semidiameters' );

var opts;
var acc;
var d;
var i;

// Get the data:
d = data();

// Create a new accumulator for detecting an outlier using Grubbs' test:
opts = {
    'init': d.length
};
acc = incrgrubbs( opts );

// Update the accumulator...
for ( i = 0; i < d.length; i++ ) {
    acc( d[ i ] );
}

// Print the test results:
console.log( acc().print() );
```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="installation">

## Installation

To use as a general utility, install the CLI package globally

```bash
npm install -g @stdlib/datasets-herndon-venus-semidiameters-cli
```

</section>

<!-- CLI usage documentation. -->

<section class="usage">

### Usage

```text
Usage: herndon-venus-semidiameters [options]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="notes">

### Notes

-   Data is written to `stdout` as newline-delimited data.

</section>

<!-- /.notes -->

<section class="examples">

### Examples

```bash
$ herndon-venus-semidiameters
-0.30
-0.44
1.01
0.48
-0.24
0.06
0.63
-0.13
-1.40
-0.22
-0.05
0.20
0.18
0.39
0.10
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

* * *

<section class="references">

## References

-   Chauvenet, William. 1868. _A Manual of Spherical and Practical Astronomy_. 5th ed. Vol. 5. London, England: Trübner & Co.
-   Grubbs, Frank E. 1950. "Sample Criteria for Testing Outlying Observations." _The Annals of Mathematical Statistics_ 21 (1). The Institute of Mathematical Statistics: 27–58. doi:[10.1214/aoms/1177729885][@grubbs:1950a].
-   Grubbs, Frank E. 1969. "Procedures for Detecting Outlying Observations in Samples." _Technometrics_ 11 (1). Taylor & Francis: 1–21. doi:[10.1080/00401706.1969.10490657][@grubbs:1969a].
-   Tietjen, Gary L., and Roger H. Moore. 1972. "Some Grubbs-Type Statistics for the Detection of Several Outliers." _Technometrics_ 14 (3). Taylor & Francis: 583–97. doi:[10.1080/00401706.1972.10488948][@tietjen:1972a].

</section>

<!-- /.references -->

<!-- <license> -->

## License

The data files (databases) are licensed under an [Open Data Commons Public Domain Dedication & License 1.0][pddl-1.0] and their contents are licensed under [Creative Commons Zero v1.0 Universal][cc0]. The software is licensed under [Apache License, Version 2.0][apache-license].

<!-- </license> -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/datasets-herndon-venus-semidiameters.svg
[npm-url]: https://npmjs.org/package/@stdlib/datasets-herndon-venus-semidiameters

[test-image]: https://github.com/stdlib-js/datasets-herndon-venus-semidiameters/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/datasets-herndon-venus-semidiameters/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/datasets-herndon-venus-semidiameters/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/datasets-herndon-venus-semidiameters?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/datasets-herndon-venus-semidiameters.svg
[dependencies-url]: https://david-dm.org/stdlib-js/datasets-herndon-venus-semidiameters/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[cli-section]: https://github.com/stdlib-js/datasets-herndon-venus-semidiameters#cli
[cli-url]: https://github.com/stdlib-js/datasets-herndon-venus-semidiameters/tree/cli
[@stdlib/datasets-herndon-venus-semidiameters]: https://github.com/stdlib-js/datasets-herndon-venus-semidiameters/tree/main

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/datasets-herndon-venus-semidiameters/tree/deno
[deno-readme]: https://github.com/stdlib-js/datasets-herndon-venus-semidiameters/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/datasets-herndon-venus-semidiameters/tree/umd
[umd-readme]: https://github.com/stdlib-js/datasets-herndon-venus-semidiameters/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/datasets-herndon-venus-semidiameters/tree/esm
[esm-readme]: https://github.com/stdlib-js/datasets-herndon-venus-semidiameters/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/datasets-herndon-venus-semidiameters/blob/main/branches.md

[pddl-1.0]: http://opendatacommons.org/licenses/pddl/1.0/

[cc0]: https://creativecommons.org/publicdomain/zero/1.0

[apache-license]: https://www.apache.org/licenses/LICENSE-2.0

[@grubbs:1950a]: https://doi.org/10.1214/aoms/1177729885

[@grubbs:1969a]: https://doi.org/10.1080/00401706.1969.10490657

[@tietjen:1972a]: https://doi.org/10.1080/00401706.1972.10488948

</section>

<!-- /.links -->
