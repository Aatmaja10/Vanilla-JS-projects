let gridContainer = document.querySelector(".gridContainer");
//GETTING CLASS
let zero = document.getElementsByClassName("zero");
let one = document.getElementsByClassName("one");
let two = document.getElementsByClassName("two");
let three = document.getElementsByClassName("three");
let four = document.getElementsByClassName("four");
let five = document.getElementsByClassName("five");

//GETTING ALL THE IMGS
let image = document.querySelectorAll("img");

//CONVERTING NODELIST INTO AN ARRAY
let imageArray = Array.from(image);
//console.log(imageArray);

//SETTING ARRAY FOR ALL THE CLICKED GRIDS
let elements = [];

//FUNCTION TO CHECK IF CLICKED ELEMENTS ARE THE SAME OR NOT
function check(){
    //  TO CHECK IF ONLY TWO ITEMS ARE PRESENT IN THE ARRAY
  if(elements.length === 2){
      //TO CHECK IF THE SAME GRID ELEMENT IS NOT SELECTED TWICE
      if(elements[0].id === elements[1].id){
          alert("You selected the same cards. Please try again");
          elements[0].style.opacity = "0";
          elements[1].style.opacity = "0";
          for(let i=0;i<=1;i++){
            elements.pop();
          }
      }
      //TO CHECK FOR MATCHES
     else if(elements[0].className === elements[1].className){
      setTimeout(()=> alert("Matched!🎉"),300);
     elements[0].addEventListener("click",()=>{
         elements.pop();
     })
     elements[1].addEventListener("click",()=>{
        elements.pop();
     }
     )
      for(let i=0;i<=1;i++){
        elements.pop();
      }
    }
    //TO CHECK IF NOT MATCHED
     else{
       
//CONSOLE.LOG IMAGEARRAY WHERE CLASSNAME = ELEMENTS[0] & ELEMENTS[1]
setTimeout(()=> {
    alert("Not Matched!"),300;
    elements[0].style.opacity = "0";
        elements[1].style.opacity = "0";
        for(let i=0;i<=1;i++){
            elements.pop();
          }
});
 }
}
}
//ADDING EVENT LISTENERS TO ALL THE ELEMENTS
[...zero].forEach(zero => zero.addEventListener("click", () => {
       zero.classList.add("show");
       if(zero.style.opacity = "0"){
           zero.style.opacity = "5";
       }
       elements.push(zero);
        check();
    }
));
[...one].forEach(one => one.addEventListener("click", () => {
    one.classList.add("show");
    if(one.style.opacity = "0"){
        one.style.opacity = "5";
    }
    elements.push(one);
     check();
 }
));
[...two].forEach(two => two.addEventListener("click", () => {
    two.classList.add("show");
    if(two.style.opacity = "0"){
        two.style.opacity = "5";
    }
    elements.push(two);
    check();
 }
));
[...three].forEach(three => three.addEventListener("click", () => {
    three.classList.add("show");
    if(three.style.opacity = "0"){
        three.style.opacity = "5";
    }
    elements.push(three);
     check();
 }
));
[...four].forEach(four => four.addEventListener("click", () => {
    four.classList.add("show");
    if(four.style.opacity = "0"){
        four.style.opacity = "5";
    }
    elements.push(four);
     check();
 }
));
[...five].forEach(five => five.addEventListener("click", () => {
    five.classList.add("show");
    if(five.style.opacity = "0"){
        five.style.opacity = "5";
    }
    elements.push(five);
     check();
 }
));

       
