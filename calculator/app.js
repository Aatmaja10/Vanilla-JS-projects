let zero = document.querySelector("#zero");
let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let four = document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");
let seven = document.querySelector("#seven");
let eight = document.querySelector("#eight");
let nine = document.querySelector("#nine");
let add = document.querySelector("#add");
let subtract = document.querySelector("#subtract");
let multiply = document.querySelector("#multiply");
let divide = document.querySelector("#divide");
let equals = document.querySelector("#equals");
let deleteAll = document.querySelector("#deleteAll");
let btn = document.querySelectorAll(".btn");
let btnArray = Array.from(btn);
let input = document.querySelector("input");
let screenValue = "";

btnArray.forEach(function(e){
  e.addEventListener("click",function(){
    input.value += e.innerHTML;
  });
}
);
add.addEventListener("click",()=>{
  input.value+= "+";
});
subtract.addEventListener("click",()=>{
  input.value+= "-";
});
divide.addEventListener("click",()=>{
  input.value+= "/";
});
multiply.addEventListener("click",()=>{
  input.value+= "*";
});
equals.addEventListener("click",result);

function result(){
   input.value = eval(input.value);

}
deleteAll.addEventListener("click",()=>{
  input.value = " "
})