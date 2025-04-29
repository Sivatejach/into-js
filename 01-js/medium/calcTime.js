/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calcTime(n) {
    const startTime = new Date(); // Get the current time before starting the calculation

    let sum = 0; // Initialize sum to 0
    for (let i = 1; i <= n; i++) { // Loop from 1 to n
        sum += i; // Add each number to the sum
    }

    const endTime = new Date(); // Get the current time after finishing the calculation

    const timeTaken = (endTime - startTime) / 1000; // Calculate time taken in seconds

    console.log(`Sum from 1 to ${n} is ${sum}`); // Output the sum
    console.log(`Time taken: ${timeTaken} seconds`); // Output the time taken
}

// Example usage:
calcTime(100); // Call the function with n = 100
calcTime(100000); // Call the function with n = 100000
calcTime(1000000000); // Call the function with n = 1000000000
