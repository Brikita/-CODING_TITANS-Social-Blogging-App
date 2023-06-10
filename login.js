const logIN = document.getElementById("login")
const eMail = document.getElementById("email")
const passWord = document.getElementById("password")
const errorMessage = document.getElementById("error-message")

function openIndex() {
    let loginDetails ={
        email: eMail.value,
        password: passWord.value
    }
    localStorage.setItem("logindetails", JSON.stringify(loginDetails))
    window.open("index.html")   
}

logIN.addEventListener("click", function() {
    const logIn = JSON.parse(localStorage.getItem("logindetails"))
    if (logIn == null) {
        eMail.value = ""
        passWord.value = ""
        errorMessage.textContent = "Invalid email address! Please sign up"
    }

    else if (eMail.value == "") {
        errorMessage.textContent = "Please enter your email address"
    }

    else if (passWord.value == "") {
        errorMessage.textContent = "Please enter your password"
    }

    else if (eMail.value === logIn.email && passWord.value === logIn.password) {
        window.open("home.html")
        eMail.value = ""
        passWord.value = ""
        errorMessage.textContent = ""
    } 

    else {
        eMail.value = ""
        passWord.value = ""
        errorMessage.textContent = "Wrong email or password. Please try again."
    }
})


function openSignup(){
    window.open("signup.html")
}

