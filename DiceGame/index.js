let arr=[1,2,3,4,5,6];
let randomNum = Math.floor(Math.random() * 6);
console.log(arr[randomNum]);
let randomNum1 = Math.floor(Math.random() * 6);
console.log(arr[randomNum1]);
let button = document.querySelector('.button');
//Random Dice Selection
function randomDice(){
    let image = document.createElement('img');
    image.src = "dice" + [arr[randomNum]] + ".svg";
    button.appendChild(image);
    image.setAttribute("style","height:140px;padding:30px");
}
function randomDice1(){
    let image1 = document.createElement('img');
    image1.src = "dice" + [arr[randomNum1]] + ".svg";
    button.appendChild(image1);
    image1.setAttribute("style","height:140px;padding:30px");
}
//Declaring the winner
function winner(){
    if(randomNum>randomNum1){
        let p1 = document.createElement("p");
        let player1 = document.createTextNode("Player 1 wins! 🎉");
        p1.appendChild(player1);
        button.appendChild(p1);
        p1.style.fontSize = "35px";
    }
    else if( randomNum<randomNum1){
        let p2 = document.createElement("p");
        let player2 = document.createTextNode("Player 2 wins! 🎉");
        p2.appendChild(player2);
        button.appendChild(p2);
        p2.style.fontSize = "35px";
    }
    else{
        let tie = document.createElement("p");
        let tieGame = document.createTextNode("It\'\s a tie! 🤝");
        tie.appendChild(tieGame);
        button.appendChild(tie);
        tie.style.fontSize = "35px";
    }   
}
