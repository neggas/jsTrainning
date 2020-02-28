'use strict'

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */

 function whisper(chaine)
 {
   
    return chaine.toLowerCase();
 }



//* Begin of tests
const assert = require('assert')


assert.strictEqual(typeof whisper, 'function')
assert.strictEqual(whisper("CHAINE"),"chaine")
assert.strictEqual(whisper("TRIEL"),"triel")
assert.strictEqual(whisper("WIFI"),"wifi")



// End of tests */
