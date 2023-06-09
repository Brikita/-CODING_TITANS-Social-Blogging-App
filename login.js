const logIn = document.getElementById("login")
const signUp = document.getElementById("signup")
const eMail = document.getElementById("email")
const passWord = document.getElementById("password")
const errorMessage = document.getElementById("error-message")


logIn.addEventListener("click", function() {
    if (eMail.value === "titans@coding.com" && passWord.value === "Test@123") {
        window.open("index.html")
        eMail.value = ""
        passWord.value = ""
        errorMessage.textContent = ""
    } else {
        errorMessage.textContent = "Wrong username or password. Please sign up."
    }
})()

signUp.addEventListener("click", function() {
    if (eMail.value === "titans@coding.com" && passWord.value === "Test@123") {
        window.open("index.html")
        eMail.value = ""
        passWord.value = ""
        errorMessage.textContent = ""
    } else {
        errorMessage.textContent = "Wrong username or password. Please sign up."
    }
})()

