#!/usr/bin/node

if (process.argv[2] === undefined){
	//checks if there is no argument
	console.log('No argument');
}else {
	//print the argument value
	console.log(process.argv[2]);
}
