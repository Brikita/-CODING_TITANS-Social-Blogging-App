// fetching the profile.html
fetch("profile.html")
.then(response => response.text())
.then(html => {
    const parser = new DOMParser();

    const doc = parser.parseFromString(html, "text/html");

    const appNameElement = doc.querySelector("#app-name")
    const id = appNameElement.id;

    console.log("ID", id)
})

.catch(error => {
    console.error("Error fetching profile.html:", error)
});

// editing profile
const unLabelled = document.getElementById("unlabelled")
const saveEditBtn = document.getElementById("save-edit")



document.addEventListener("DOMContentLoaded", function saveDetails()  {
    let firstName = document.getElementById ("first-name")
    let appName = document.getElementById("app-name")
    let inputName = firstName.value
    if (inputName === "") {
        
        unLabelled.textContent = "You have to fill this out"
        window.open("")
        
    } else {        
        appName.textContent = inputName
        window.open("profile.html")
        console.log(inputName)
    }
}