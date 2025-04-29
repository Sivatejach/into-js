

function countVowels(str){
    str=str.toLowerCase();

    let count=0;

    let vowels="aeiou";

    for(let i=0;i<str.lengyh;i++){
        if(vowels.includes(str[i])){
            count++;
        }
    }
    return count;

}

// Example usage:
const inputString = "Hello World"; // Sample input string
const vowelCount = countVowels(inputString); // Call the function with the sample string
console.log(vowelCount); // Output the count of vowels found