#!/usr/bin/node

// This line specifies the path to the interpreter for the script.

if (process.argv[2] === undefined){
	//checks if there is no argument
	console.log('No argument');
	//output for no arguments
}else {
	console.log(process.argv[2]);
	//print the argument value
}
