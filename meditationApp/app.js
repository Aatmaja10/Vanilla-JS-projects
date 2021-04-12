let light = document.querySelector("#light");
let dark = document.querySelector("#dark");
let startButton = document.querySelector(".startButton");
let stopButton = document.querySelector(".stopButton");
let min = document.querySelector("#min");
let sec = document.querySelector("#sec");

let lightAudio, darkAudio;

light.addEventListener("click",function(){
    dark.style.visibility = "visible";
    light.style.visibility = "hidden";
    document.body.style.backgroundColor = "white";
    startButton.style.backgroundColor="rgb(216, 138, 35)";
    startButton.style.color="white";
    stopButton.style.backgroundColor="rgb(216, 138, 35)";
    stopButton.style.color="white";
    lightAudio = new Audio("light.mp3");
    lightAudio.play();
    darkAudio.pause();
})
dark.addEventListener("click",function(){
    light.style.visibility = "visible";
    dark.style.visibility = "hidden";
    document.body.style.backgroundColor = "rgb(22,22,22)";
    startButton.style.backgroundColor = "black";
    startButton.style.color = "white";
    stopButton.style.backgroundColor = "black";
    stopButton.style.color = "white";
    darkAudio = new Audio("dark.mp3");
    darkAudio.play();
    lightAudio.pause();
})

let secInterval;
let minInterval;
let secCount = 0;
let minCount = 1;
startButton.addEventListener("click",function(){
   secInterval = setInterval(function(){
        sec.innerHTML = secCount++;
    },1000);
   minInterval = setInterval(function(){
        min.innerHTML = minCount++;
    },60000);
},{once:true});
stopButton.addEventListener("click",function(){
    clearInterval(secInterval);
    clearInterval(minInterval);
})