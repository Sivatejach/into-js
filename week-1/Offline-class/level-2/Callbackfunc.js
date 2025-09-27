function square(n) {
    return n * n;
}

function cube(n) {
    return n * n * n;
}

function sumofSquares(a, b){
    return square(a) + square(b);
}

console.log(sumofSquares(2, 3));


//with using callback

function sumofSqureorcubeusingCallback(a, b, callback){
    return callback(a) + callback(b);
}

console.log(sumofSqureorcubeusingCallback(2, 3, square));
console.log(sumofSqureorcubeusingCallback(2, 3, cube));

//sumofsomething using ananymous function

function sumofSomethingusingAnanymousFunction(a, b, callback){
    return callback(a) + callback(b);
}

console.log(sumofSomethingusingAnanymousFunction(2, 3, function(n){return n*n}));
console.log(sumofSomethingusingAnanymousFunction(2, 3, function(n){return n*n*n}));

//sumofsomething using arrow function
function sumofSomethingusingArrowFunction(a, b, callback){
    return callback(a) + callback(b);
}

console.log(sumofSomethingusingArrowFunction(2, 3, (n)=>n*n));
console.log(sumofSomethingusingArrowFunction(2, 3, (n)=>n*n*n));

//sumofsomething using callback
function sumofSomethingusingCallback(a, b, callback){
    return callback(a) + callback(b);
}

console.log(sumofSomethingusingCallback(2, 3, (n)=>n*n));
console.log(sumofSomethingusingCallback(2, 3, (n)=>n*n*n));