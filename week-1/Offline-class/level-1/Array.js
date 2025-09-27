//Array handbook

// Array:   push(), pop(), shift(), unshift(), splice(), slice(),
// concat(), forEach(), map(), filter(), reduce(), find(), sort()

// Run each function to see the output, play and learn by doing.

// push()
function pushArray(arr, element) {
    arr.push(element);
    console.log(arr);
}

// pop()
function popArray(arr) {
    arr.pop();
    console.log(arr);
}

// shift()
function shiftArray(arr) {
    arr.shift();
    console.log(arr);
}

// unshift()
function unshiftArray(arr, element) {
    arr.unshift(element);
    console.log(arr);
}   

// splice()
function spliceArray(arr, start, deleteCount, ...elements) {
    arr.splice(start, deleteCount, ...elements);
    console.log(arr);
}

// slice()
function sliceArray(arr, start, end) {
    console.log(arr.slice(start, end));
}

// concat()     
function concatArray(arr1, arr2) {
    console.log(arr1.concat(arr2));
}

// forEach()
function forEachArray(arr, callback) {
    arr.forEach(callback);
}

// map()
function mapArray(arr, callback) {
    console.log(arr.map(callback));
}

// filter()
function filterArray(arr, callback) {
    console.log(arr.filter(callback));
}   

