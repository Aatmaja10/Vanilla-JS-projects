let arr=[1,2,3];
let randomNum = Math.floor(Math.random() * 3);
let n = arr[randomNum];
console.log(n);
let randomNum1 = Math.floor(Math.random() * 3);
let n1 = arr[randomNum1];
console.log(n1);
let players = document.querySelector('.main');
let w = document.querySelector('.players');
function playerOne(){
    let image = document.createElement('img');
    image.src = "sps" + [arr[randomNum]] + ".png";
    players.appendChild(image);
    image.setAttribute("style","height:140px;padding:30px");
}
function playerTwo(){
    let image = document.createElement('img');
    image.src = "sps" + [arr[randomNum1]] + ".png";
    players.appendChild(image);
    image.setAttribute("style","height:140px;padding:30px");
}
//One = paper, Two = stone, Three = Scissor
function winner(){
    if(n === 1 && n1 === 2){
        let winner = document.createElement('h1');
        winner.innerHTML = "Player One is the winner!🎉 ";
         document.body.appendChild(winner);
         winner.style.textAlign = "center";
         winner.style.fontFamily = "'Merriweather', serif"
    }
    else if(n === 1 && n1 === 3){
        let winner = document.createElement('h1');
        winner.innerHTML = "Player Two is the winner!🎉 ";
         document.body.appendChild(winner);
         winner.style.textAlign = "center";
         winner.style.fontFamily = "'Merriweather', serif"
    }
    else if(n === 2 && n1 === 1){
        let winner = document.createElement('h1');
        winner.innerHTML = "Player Two is the winner!🎉 ";
         document.body.appendChild(winner);
         winner.style.textAlign = "center";
         winner.style.fontFamily = "'Merriweather', serif"
    }
    else if(n === 2 && n1 === 3){
        let winner = document.createElement('h1');
        winner.innerHTML = "Player One is the winner!🎉 ";
         document.body.appendChild(winner);
         winner.style.textAlign = "center";
         winner.style.fontFamily = "'Merriweather', serif"
    }
    else if(n === 3 && n1 === 1){
        let winner = document.createElement('h1');
        winner.innerHTML = "Player One is the winner!🎉 ";
         document.body.appendChild(winner);
         winner.style.textAlign = "center";
         winner.style.fontFamily = "'Merriweather', serif"
    }
    else if(n === 3 && n1 === 2){
        let winner = document.createElement('h1');
        winner.innerHTML = "Player Two is the winner!🎉 ";
         document.body.appendChild(winner);
         winner.style.textAlign = "center";
         winner.style.fontFamily = "'Merriweather', serif"
    }
   else{
        let winner = document.createElement('h1');
        winner.innerHTML = "Its a tie!🤝";
         document.body.appendChild(winner);
         winner.style.textAlign = "center";
         winner.style.fontFamily = "'Merriweather', serif"
    }
}
