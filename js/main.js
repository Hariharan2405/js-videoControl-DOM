var video=document.getElementById("video");
var play=document.getElementById("play");
var pass=document.getElementById("pass");

play.addEventListener("click",function(){
    video.play();
    pass.style.backgroundColor="#fff"
    play.style.backgroundColor="blue"
})

pass.addEventListener("click",function(){
    video.pause();
    pass.style.backgroundColor="blue"
    play.style.backgroundColor="#fff"
})