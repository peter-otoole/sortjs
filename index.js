/**
 * nodejs-sort
 *
 * Copyright Peter O'Toole 2016
 *
 * Created by Peter on 21/05/2016.
 */

"use strict"

const bubble = require( "./lib/bubble" )
const merge  = require( "./lib/merge" )

const comparators = require( "./lib/comparators" )


module.exports = {
	
	bubble: bubble,
	merge:  merge,
	
	comparators: comparators 
} 
