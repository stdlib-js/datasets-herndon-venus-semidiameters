/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var IS_BROWSER = require( '@stdlib/assert-is-browser' );
var isNumberArray = require( '@stdlib/assert-is-number-array' ).primitives;
var data = require( './../lib' );


// VARIABLES //

var opts = {
	'skip': IS_BROWSER
};


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof data, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns an array of numbers', opts, function test( t ) {
	var d = data();
	t.strictEqual( isNumberArray( d ), true, 'returns an array of numbers' );
	t.end();
});

tape( 'the function returns a copy', opts, function test( t ) {
	var d1;
	var d2;

	d1 = data();
	d2 = data();

	t.notEqual( d1, d2, 'different references' );
	t.end();
});
