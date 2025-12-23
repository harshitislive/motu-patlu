var audio = document.getElementById("myAudio");
var pic = document.getElementById('pic');

function startDance() {
    pic.src = 'dance.gif';
    audio.play();
}


function stopDance() {
    pic.src = 'stand.png';
    audio.pause();
}