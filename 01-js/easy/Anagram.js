/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
    // Remove all non-alphanumeric characters and convert to lowercase
    const cleanStr1 = str1.replace(/[^a-z0-9]/gi, '').toLowerCase();
    const cleanStr2 = str2.replace(/[^a-z0-9]/gi, '').toLowerCase();
    
    // Sort the characters of both strings and compare
    const sortedStr1 = cleanStr1.split('').sort().join('');
    const sortedStr2 = cleanStr2.split('').sort().join('');
    
    return sortedStr1 == sortedStr2;

}


// Sample inputs
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world")); // false
