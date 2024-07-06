function sum(num1, num2, FunToCall) {
    let result = num1 + num2;
    FunToCall(result);
}

function DisplayResultWay01(data) {
    console.log(`Result of the operation is: ${data}`);
}

function DisplayResulyWay02(data) {
    console.log(`Operation's Result is: ${data}`);
}

// You are allowed to call only one function:
// how will you displayResult of Sum!

// DisplayResultWay01(sum(12,2)); // This is a appraoch in which you can do but

// We can pass a function too , accepting as a param!

// These are what are called CALLBACKS!

// sum(12, 8, DisplayResultWay01);


// Another example is setTimeout:

const greet = () => {
    console.log("Hello world!!")
}


// setTimeout(greet , 3 * 1000) // (n * 1000) After n seconds

setInterval(greet , 500) // Miliseconds!