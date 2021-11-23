var audio = document.getElementById("audio");
var time_past = document.getElementById("time-past");
var time_left = document.getElementById("time-left");
var fill = document.getElementById("fill");
var fill_btn = document.getElementById("fill-btn");
var played = false;

function play_and_pause(){
    if (played){
        audio.pause();
        document.getElementById("play-pause-btn").src ="image/play icon.png";
        played = false;
    }
    else{
        audio.play();
        document.getElementById("play-pause-btn").src = "image/pause icon.png";
        played = true;
    }
}
function change_format(time){
    var minute = parseInt(time / 60);
    var seconds = parseInt(time - (minute * 60));

    if(seconds > 9){
          return minute.toString() + ":" +seconds.toString();
    }else{
          return minute.toString() + ":0" + seconds.toString();
    }
}

audio.addEventListener('timeupdate' , function(){
     time_past.innerText = change_format(audio.currentTime);
     time_left.innerText = "-" + change_format(audio.duration - audio.currentTime);
});