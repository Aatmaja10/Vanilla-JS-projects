let clear =document.querySelector(".Clear");
let input = document.querySelector("input");
let h4 = document.querySelector("h4");
let count = 0;
let allEntries ;
let todoContainer = [];
let container;
function storeTodosinLocalStorage(){
   //TO AVOID RESTING THE LOCAL STORAGE
   //FECTHING THE DATA FROM LOCAL STORAGE
    allEntries = JSON.parse(localStorage.getItem("allEntries"));
    if(allEntries === null){
        allEntries = [];
    }
    if(input.value !== ""){
        allEntries.push(input.value);
    }

    //SET ALL THE ITEMS IN ALLENTRIES TO LOCAL STORAGE
    localStorage.setItem("allEntries", JSON.stringify(allEntries));    
    

  }

  function makeContainers(){
   container = document.createElement("div");
    h4.append(container);
    for(let i=0; i<=allEntries.length; i++){
        container.innerHTML = allEntries[i];
    }
    container.classList.add("container");
    container.innerHTML = allEntries[count];
    count++;
}


input.addEventListener("keypress",addTodos);//ON HITTING ENTER
function addTodos(e){
    if(e.key === 'Enter'){
        storeTodosinLocalStorage();
        makeContainers();
        todoContainer.push(container);
        location.reload();
    }
    }

function showStoredTodosOnRefresh(){
    storeTodosinLocalStorage();
    for(let i=0; i<allEntries.length; i++){
        makeContainers();
    }

}

h4.addEventListener("click",completedTask);

function completedTask(e){
    console.log(e.target);
    allEntries = JSON.parse(localStorage.getItem("allEntries"));
    e.target.classList.add("backOutRightanimation")
    setInterval(() => {
        e.target.remove();
    }, 1500);
    allEntries.splice(e.target,1);
    localStorage.setItem("allEntries", JSON.stringify(allEntries));
    console.log(allEntries);
}


//DISPLAY THE ITEMS STORED IN LOCAL STORAGE ON REFRESH
window.addEventListener("DOMContentLoaded",showStoredTodosOnRefresh);

function clearTodos(){
    h4.classList.add("backOutRightanimation");
    setInterval(function(){
        localStorage.clear();
        h4.innerHTML = " ";

    },2000);
}

clear.addEventListener("click",clearTodos); 


