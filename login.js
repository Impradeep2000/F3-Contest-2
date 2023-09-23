const login = document.getElementById("logged-in");
const logoutBtn = document.getElementById("logout-button");

async function renderData(){

    const accessToken = await tokenValidity();
    if(accessToken){
        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const token = document.getElementById("token");
        const password = document.getElementById("password");

        const user = JSON.parse(localStorage.getItem("userdata"));

        name.innerText=`Full Name : ${user.username}`;
        email.innerText=`Email : ${user.email}`;
        token.innerText=`Token : ${user.token}`;
        password.innerText=`Password : ${user.password}`;
    }else{
        window.location.href="./index.html";
    }
}

logoutBtn.addEventListener("click" , ()=>{
    localStorage.clear();
    window.location.href="./index.html";
})


function tokenValidity (){
    let token1 = JSON.parse(localStorage.getItem("userdata"));
    if(token1!==null){
        return true;
    }
    return false;
}
// tokenValidity();
renderData();
