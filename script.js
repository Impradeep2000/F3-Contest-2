const submitBtn = document.getElementById("submit-button");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const error = document.getElementById("error-message");

function checkInputs(){
    let check = true;
    if(username.value==="" || email.value==="" || password.value==="" || confirmPassword.value===""){
        check=false;
    }
    console.log(check);
    return check;
}

submitBtn.addEventListener("click",(event)=>{
    event.preventDefault();
    let checkinput = checkInputs();
    if(checkinput){
        if(password.value === confirmPassword.value){
            let data = {
                "username" : username.value,
                "password" : password.value,
                "email" : email.value,
                "token" : generateRandomString(16).toString()
            }
            let data1 = JSON.stringify(data);
            localStorage.setItem("userdata",data1);
            window.location.href="./login-page.html";
        }else{
            error.innerText="Password Not Match!";
        }
    }else{
        error.innerText="Error: All fields are mandatory!";
    }
});

const allCharacters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
function generateRandomString(length) {
  let randomString = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allCharacters.length);
    randomString += allCharacters[randomIndex];
  }
  return randomString;
}



  