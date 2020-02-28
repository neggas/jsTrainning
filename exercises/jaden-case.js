'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */


function jadenCase(chaine)
{
    return chaine.split(' ').map(function(elt){
        return elt[0].toUpperCase()+elt.substring(1,elt.length).toLowerCase();
    }).join(' ');
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof jadenCase, "function")
assert.strictEqual(jadenCase('bonjour nan'), 'Bonjour Nan')
assert.strictEqual(jadenCase('mes frere'), 'Mes Frere')
// End of tests */
