let next = document.querySelector("#next");
let previous = document.querySelector("#previous");
let play = document.querySelector("#play");
let pause = document.querySelector("#pause");
let h2 = document.querySelector("h2");
let singerImage = document.querySelector(".singerImage");
let progress = document.querySelector(".progress");
let progressContainer = document.querySelector(".progress-container");
let timeStap = document.querySelector(".timeStap");
let count = 0;
let playAudio = document.createElement("audio");

let currentSinger = [ 
    {
    name:"Red Velvet",
    image:"redvelvet1.jpeg",
    song:"Redvelvet.mp3",
    songName:"Psycho",
    },
    {
    name:"BTS",
    image:"BTS3.jpeg",
    song:"BTS.mp3",
    songName:"Black Swan",

    },
    {
    name:"Blackpink",
    image:"blackpink4.jpeg",
    song:"blackpink.mp3",
    songName:"Pretty Savage",
    },
    {
    name:"ITZY",
    image:"ITZY4.jpeg",
    song:"ITZY.mp3",
    songName:"Not Shy",
    },
    {
    name:"Twice",
    image:"twice2.jpeg",
    song:"Twice.mp3",
    songName:"I Can't Stop Me",
    },
    {
    name:"SuperM",
    image:"SuperM4.jpeg",
    song:"SuperM.mp3",
    songName:"Jopping",
    },
];

function loadImages(){
    singerImage.src = currentSinger[count].image;
    h2.textContent = currentSinger[count].name;
    //console.log(currentSinger[count].image);
};

function loadNextImages(){
    count++;
    if(count === 6){
        count = 0;
    };
    playSong();
    loadImages();
};

function loadPreviousImages(){
    if(count === 0){
        count = 6;
    }
    count--;
    playSong();
    loadImages();
};

function updateProgress(e){
    let {duration,currentTime} = e.srcElement;
    let progressPercent = (currentTime/duration) *100;
    progress.style.width = `${progressPercent}%`;
    timeStap.innerHTML = currentSinger[count].songName + `&nbsp`+ `&nbsp`+ `&nbsp` + `&nbsp`+ `&nbsp`+ Math.floor((playAudio.duration - playAudio.currentTime));
};

function setProgress(e){
    let width = this.clientWidth;
    let clickX = e.offsetX;
    let duration = playAudio.duration;
    playAudio.currentTime = (clickX / width) * duration;
};

function playSong(){
    playAudio.src = currentSinger[count].song;
    playAudio.play();
    pause.style.visibility = "visible";
    play.style.visibility = "hidden";
};

function pauseSong(){
    playAudio.pause();
    pause.style.visibility = "hidden";
    play.style.visibility = "visible";
};

window.addEventListener("DOMContentLoaded",loadImages);
playAudio.addEventListener("timeupdate",updateProgress);
progressContainer.addEventListener("click",setProgress);
next.addEventListener("click",loadNextImages);
previous.addEventListener("click",loadPreviousImages);
play.addEventListener("click",playSong);
pause.addEventListener("click",pauseSong);
