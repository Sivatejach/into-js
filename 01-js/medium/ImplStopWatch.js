

class stopWatch{
    constructor(time){
        this.time=time
    }
    start(){
        this.startTime = new Date().getMilliseconds()
    }
    stop(){
        this.endTime = new Date().getMilliseconds()
        console.log(`Time taken: ${this.endTime - this.startTime} milliseconds`)
    }
    reset(){
        this.startTime = null
        this.endTime = null
    }
    getTime(){
        return this.endTime - this.startTime
    }
   

}

let sw = new stopWatch()

sw.start()

setTimeout(() => {
    sw.stop()
}, 6000) // Stop the stopwatch after 5 seconds
