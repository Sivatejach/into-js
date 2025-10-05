
//setInterval vs setTimeout
/*
    setTimeout is used to execute a function once after a specified delay.
    setInterval is used to repeatedly execute a function at specified intervals.
*/

/*
Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/
function wait(n) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, n * 1000);
    });
}



const waitexec = async () => {
    console.log('Waiting for 3 seconds...');
    await wait(3);
    console.log('Done waiting! and Promise resolved');
    console.log('3 seconds have passed!');      
};

waitexec();


function demoSetInterval() {
// setInterval example
    let count = 0;
    const intervalId = setInterval(() => {
        count++;    
        console.log(`Interval count: ${count}`);
        if (count >= 5) { // Stop after 5 intervals
            clearInterval(intervalId);
            console.log('Interval cleared after 5 counts.');
        }
    }, 1000); // Executes every 1 second
}

demoSetInterval();

// Uncomment the line below to see setInterval in action
// demoSetInterval();       

