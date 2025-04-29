

function isPalindrome(str) {
    // Convert the string to lowercase and remove non-alphanumeric characters
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Check if the string is equal to its reverse
    return str === str.split('').reverse().join('');
}


// Example usage:
const inputString ="RACECAR"
const isInputPalindrome = isPalindrome(inputString); // Call the function with the sample string
console.log(isInputPalindrome); // Output whether the input string is a palindrome or not

