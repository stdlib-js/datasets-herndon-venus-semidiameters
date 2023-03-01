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

# Venus Semidiameters

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Fifteen observations of the vertical semidiameter of Venus, made by Lieutenant Herndon, with the meridian circle at Washington, in the year 1846.

<section class="intro">

Herndon's observations are a classic dataset commonly used in examples demonstrating outlier detection.

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import data from 'https://cdn.jsdelivr.net/gh/stdlib-js/datasets-herndon-venus-semidiameters@esm/index.mjs';
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

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import incrgrubbs from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-grubbs@esm/index.mjs';
import data from 'https://cdn.jsdelivr.net/gh/stdlib-js/datasets-herndon-venus-semidiameters@esm/index.mjs';

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

</script>
</body>
</html>
```

</section>

<!-- /.examples -->



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

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

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
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[cli-section]: https://github.com/stdlib-js/datasets-herndon-venus-semidiameters#cli
[cli-url]: https://github.com/stdlib-js/datasets-herndon-venus-semidiameters/tree/cli
[@stdlib/datasets-herndon-venus-semidiameters]: https://github.com/stdlib-js/datasets-herndon-venus-semidiameters/tree/main

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/datasets-herndon-venus-semidiameters/tree/deno
[umd-url]: https://github.com/stdlib-js/datasets-herndon-venus-semidiameters/tree/umd
[esm-url]: https://github.com/stdlib-js/datasets-herndon-venus-semidiameters/tree/esm
[branches-url]: https://github.com/stdlib-js/datasets-herndon-venus-semidiameters/blob/main/branches.md

[pddl-1.0]: http://opendatacommons.org/licenses/pddl/1.0/

[cc0]: https://creativecommons.org/publicdomain/zero/1.0

[apache-license]: https://www.apache.org/licenses/LICENSE-2.0

[@grubbs:1950a]: https://doi.org/10.1214/aoms/1177729885

[@grubbs:1969a]: https://doi.org/10.1080/00401706.1969.10490657

[@tietjen:1972a]: https://doi.org/10.1080/00401706.1972.10488948

</section>

<!-- /.links -->
