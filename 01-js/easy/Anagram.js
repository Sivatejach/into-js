/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase().replace(/[^a-z0-9]/g, '');
  str2 = str2.toLowerCase().replace(/[^a-z0-9]/g, '');
  const sortedStr1 = str1.split('').sort().join('');
  const sortedStr2 = str2.split('').sort().join('');  
  return sortedStr1 == sortedStr2;

}


// Sample inputs
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world")); // false

