#!/usr/bin/node

// This line specifies the path to the interpreter for the script.

if (isNaN(process.argv[2]) || process.argv[2] === undefined){
	// Checks if the first argument is not a number.
	console.log('Not a number');
	// Print it is not a number.
}else {
	console.log('My number: ' + parseInt(process.argv[2]));
	// print the number converted to an integer.
}
