//GETTING ELEMENTS
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four= document.querySelector(".four");
let five = document.querySelector(".five");
let  six= document.querySelector(".six");
let scoreBoard = document.querySelector(".scoreBoard");
let span = document.querySelector("span");
let timeH3 = document.querySelector("h3");

//DISPLAYING MOLES ON SETINTERVALS
let oneInterval = window.setInterval(function(){
    one.classList.toggle("show");
},1900);
let twoInterval =window.setInterval(function(){
    two.classList.toggle("show");
},1500);
let threeInterval =window.setInterval(function(){
    three.classList.toggle("show");
},1200);
let fourInterval =window.setInterval(function(){
    four.classList.toggle("show");
},1000);
let fiveInterval =window.setInterval(function(){
    five.classList.toggle("show");
},1500);
let sixInterval =window.setInterval(function(){
    six.classList.toggle("show");
},800);
 
let scoreRecord = 0;
let timing = 30;

//ADDING POINTS TO EVERY CLICKED MOLE
one.addEventListener("click",()=>{
    span.innerHTML = scoreRecord++;
});
two.addEventListener("click",()=>span.innerHTML = scoreRecord++);
three.addEventListener("click",()=>span.innerHTML = scoreRecord++);
four.addEventListener("click",()=>span.innerHTML = scoreRecord++);
five.addEventListener("click",()=>span.innerHTML = scoreRecord++);
six.addEventListener("click",()=>span.innerHTML = scoreRecord++);

//UPDATING THE SCOREBOARD AND CLEARING WHEN THE TIME IS UP
let timeBoard = window.setInterval(function(){
    timeH3.innerHTML = timing--;
    if(timing===-1){
       clearInterval(timeBoard);
       clearInterval(oneInterval);
       clearInterval(twoInterval);
       clearInterval(threeInterval);
       clearInterval(fourInterval);
       clearInterval(fiveInterval);
       clearInterval(sixInterval);
       one.style.visibility = "hidden";
       two.style.visibility = "hidden";
       three.style.visibility = "hidden";
       four.style.visibility = "hidden";
       five.style.visibility = "hidden";
       six.style.visibility = "hidden";


     }
},1000)
