/** @license Apache-2.0 */

'use strict';

/**
* Create an iterator which generates a sequence of nonpositive even integers.
*
* @module @stdlib/math-iter-sequences-nonpositive-even-integers
*
* @example
* var iterNonPositiveEvenIntegersSeq = require( '@stdlib/math-iter-sequences-nonpositive-even-integers' );
*
* var iter = iterNonPositiveEvenIntegersSeq();
*
* var v = iter.next().value;
* // returns 0
*
* v = iter.next().value;
* // returns -2
*
* v = iter.next().value;
* // returns -4
*
* // ...
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
