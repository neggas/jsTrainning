'use strict'

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */

//* Begin of tests
const assert = require('assert')

function cutFirst(str)
{   
    const length = str.length;
    return str.substring(2,length);
}

function cutLast(str)
{
    const length = str.length;
    return str.substring(0,length-2);
}

function cutFirstLast(str)
{   
    const length = str.length;
    str = str.substring(2,length);
    str = str.substring(0,length-2);

    return str;
}

assert.strictEqual(typeof cutFirst, 'function')
assert.strictEqual(typeof cutFirst, 'function')
assert.strictEqual(typeof cutFirst, 'function')
assert.strictEqual(cutFirst("chaine"),"aine");


// End of tests */

