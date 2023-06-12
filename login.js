const userName = document.getElementById("name")
const logIn = document.getElementById("login")
const eMail = document.getElementById("email")
const passWord = document.getElementById("password")
const errorMessage = document.getElementById("error-message")
const signUp = document.getElementById("sign-up")

function openIndex() {
    let loginDetails ={
        email: eMail.value,
        password: passWord.value
    }
    localStorage.setItem("logindetails", JSON.stringify(loginDetails))
    window.open("index.html")   
}

logIn.addEventListener("click", function() {
    const logIn = JSON.parse(localStorage.getItem("logindetails"))
    if (eMail.value === logIn.email && passWord.value === logIn.password) {
        window.open("home.html")
        eMail.value = ""
        passWord.value = ""
        errorMessage.textContent = ""
    } 
    else if (logIn.email == null || passWord.email == null) {
        eMail.value = ""
        passWord.value = ""
        errorMessage.textContent = "Wrong email or password. Please sign up."
    }
    else {
        errorMessage.textContent = "Wrong email or password. Please sign up."
    }
})


function openSignup(){
    window.open("signup.html")
}

