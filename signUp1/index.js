let password = document.querySelector("#password");
let verifyPassword = document.querySelector("#verifyPassword");
let passwordContainer = document.querySelector(".passwordContainer");
let submit = document.querySelector("#submit");
submit.addEventListener("click", verify,{once:true});
function verify(){
    if(password.value !== verifyPassword.value){
        let passwordError = document.createElement("div");
        passwordError.innerHTML = "Password does not match";
        let error = passwordContainer.appendChild(passwordError);
        error.style.color = "red";
        error.style.padding = "15px"
        error.style.fontSize = "13px";
    }
}
