let inputName = document.getElementById("inputName");
let signInMsg = document.getElementById("signinMsg");

function signIn(){
    let inputValue = inputName.value;
    signInMsg = signInMsg.textContent = "Hi "+inputValue+", We are verifying your Details";
}