const player = document.getElementById("player"),
    btn = document.getElementById("video-btn"),
    curtime = document.getElementById("curtime"),
    duration = document.getElementById("duration"),
    video = document.getElementById("video");
player.autoplay = true;
setTimeout(()=>{duration.innerHTML =" /"+Number(player.duration).toFixed(2);},1000);


btn.addEventListener("click",()=>{
    if(player.paused){
       player.play();
       btn.value="Paused"
   } else{
       player.pause();
       btn.value="Play";
   }
});

setInterval(()=>{
    curtime.innerHTML = Number(player.currentTime).toFixed(2);
},250);