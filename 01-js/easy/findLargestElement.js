

function findLargestElement(nums){
    if (nums.length === 0) return null; // Check if the array is empty
    let largest = nums[0]; // Initialize largest with the first element
    for (let i = 1; i < nums.length; i++) { // Start from the second element
        if (nums[i] > largest) { // Compare with the current largest
            largest = nums[i]; // Update largest if a larger element is found
        }
    }
    return largest; // Return the largest element found
}

// Example usage:
const numbers = [3, 5, 7, 2, 8, 61]; // Sample array of numbers
const largestNumber = findLargestElement(numbers); // Call the function with the sample array   
console.log(largestNumber); // Output the largest number found