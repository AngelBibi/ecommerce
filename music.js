const button = document.querySelector("button")
let count = 0

function play(){
    if(count == 0) {
        count = 1
        const audio = document.querySelector("audio")
        audio.currentTime = 0.1
        audio.volume = 0.05
        audio.play()
        document.getElementById("btn_play").src="images/375.png" 
    } else {
        count = 0
        const audio = document.querySelector("audio")
        audio.currentTime = 0
        audio.pause()
        document.getElementById("btn_play").src="images/275.png" 
    }
}