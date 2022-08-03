let video = document.querySelector('video');
let playButton = document.getElementById('play');
let pauseButton = document.getElementById('pause');

setTimeout(()=>{document.getElementById('time').innerHTML = `Duracion del Video: ${video.duration.toFixed(2)}`}, 1000);

for(let i = 0; i < video.tim; i++){
    console.log(video.currentTime)
}

playButton.addEventListener('click', ()=>{
    video.play()});

pauseButton.addEventListener('click', ()=>{
    video.pause();
    flag=false;
})