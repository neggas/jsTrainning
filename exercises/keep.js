'use strict'

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */

function keepFirst(str)
{   
    const length = str.length;
    return str.substring(0,2);
}

function keepLast(str)
{
    const length = str.length;
    return str.substring(length-2,length);
}

function keepFirstLast(str)
{   
    const length = str.length;

    str = str.substring(2,length)
    str = str.substring(0,2);

    return str;
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof keepFirst, 'function')
assert.strictEqual(typeof keepFirst, 'function')
assert.strictEqual(typeof keepFirst, 'function')
assert.strictEqual(keepFirst("chaine"),"ch");
assert.strictEqual(keepLast("chaine"),"ne");
assert.strictEqual(keepFirstLast("chaine"),"ai");

// End of tests */
