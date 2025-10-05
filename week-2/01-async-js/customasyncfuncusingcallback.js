function myOwnAsyncfunc(callback,duration) {
    setTimeout(() => {
        callback();
    }, duration);       
}


myOwnAsyncfunc(() => {
    console.log('Async function executed after 2 seconds');
}, 2000);   
myOwnAsyncfunc(() => {
    console.log('Async function executed after 4 seconds');
}, 4000);
