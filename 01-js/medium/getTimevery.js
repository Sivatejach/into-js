

function gettheTimeevery(){
    console.log(new Date().getTime())
}

function stopWatch() {
    let startTime = new Date().getTime()
    let endTime = new Date().getTime()
    console.log(`Time taken: ${endTime - startTime} milliseconds`)
}


setInterval(stopWatch, 1000) // every 1 second




//setInterval(gettheTimeevery, 1000) // every 1 second
// setInterval(gettheTimeevery, 1000) // every 1 second
