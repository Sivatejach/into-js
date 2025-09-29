//Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second


function counter(){
    let count = 0;
    const id =setInterval(function(){
        console.log(count);
        count++;
        if (count > 10) {
            clearInterval(id);
        }
    }, 1000);
}

counter();
