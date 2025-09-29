    // ## Counter without setInterval

    // Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

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
