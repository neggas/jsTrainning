'use strict'

/*
 * Create a `yell` function that takes a string
 * and return the same string in upper case
 *
 */

function yell (chaine){
    return chaine.toUpperCase();
}
//* Begin of tests
const assert = require('assert')



assert.strictEqual(yell("chaine"), "CHAINE")
assert.strictEqual(yell("triel"), "TRIEL")
assert.strictEqual(yell("nan"), "NAN")
assert.strictEqual(yell("vempire"), "VEMPIRE")
assert.strictEqual(yell("chemin"), "CHEMIN")


// End of tests */
