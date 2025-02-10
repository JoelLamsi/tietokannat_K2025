// 1. 

/*
setTimeout(doSomething, 2000);

function doSomething() {
    console.log("Demonstrating callback function");
}

console.log("The application is started");
*/

// 2. Tämä käyttää anonyymiä funktiota

/*
setTimeout(function() {
    console.log("Demonstrating the callbacks, using anonymous function");
}, 2000);

console.log("The application is started");
*/

// Tämä käyttää nuolifunktiota


setTimeout(() => {
    console.log("Demonstrating the callbacks, using arrow function");
}, 2000);

console.log("The application is started");
