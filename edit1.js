// fetching the profile.html
/* fetch("profile.html")
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
}); */

// editing profile
const unLabelled = document.getElementById("unlabelled")
const saveEditBtn = document.getElementById("save-edit")
saveEditBtn.addEventListener("click", function() {

    if (name.value = undefined) {
        unLabelled.textContent = "You have to fill this out"
        window.open("")
    } else {
        window.open("profile.html")
    appName.textContent = name.value
    }
})

/* document.addEventListener("DOMContentLoaded", function() {
    saveEditBtn.addEventListener("click", saveDetails);
}) */