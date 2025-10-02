/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise((resolve) => {
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
}

waitexec();