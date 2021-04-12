let hexValues=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
function randomColors(){
    let hex = '#';
    for(let i=0;i<6;i++){
        let randomIndex = Math.floor(Math.random() * hexValues.length);
        let randomValue = hexValues[randomIndex];
        hex = hex + randomValue;
    }
     document.querySelector('.description').innerHTML = ` ${hex}`;
     document.querySelector('.description').style.fontSize="35px";
    return hex;
    
}
let randomColor = document.querySelector('button');
randomColor.onclick=()=>{
    document.body.style.backgroundColor = randomColors();
}
