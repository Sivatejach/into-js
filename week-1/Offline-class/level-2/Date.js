
const currentDate = new Date();
console.log(currentDate); // Current date and time
console.log(currentDate.getFullYear()); // Current year
console.log(currentDate.getMonth() + 1); // Current month (0-11, so add 1)
console.log(currentDate.getDate()); // Current day of the month (1-31)
console.log(currentDate.getHours()); // Current hour (0-23)
console.log(currentDate.getMinutes()); // Current minute (0-59)]
console.log(currentDate.getSeconds()); // Current second (0-59)
console.log(currentDate.getMilliseconds()); // Current millisecond (0-999)

console.log(currentDate.getTime()); // Current timestamp in milliseconds since Jan 1, 1970
console.log(currentDate.getTimezoneOffset()); // Timezone offset in minutes

console.log("**************************")
currentDate.setFullYear(2022); // Set year to 2025
console.log(currentDate); // Updated date and time
console.log(currentDate.getFullYear()); // Updated year