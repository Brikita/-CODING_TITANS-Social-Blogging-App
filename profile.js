// fetching the profile.html
/* fetch("edit.html")
.then(response => response.text())
.then(html => {
    const tempElement = document.createElement("input")
    tempElement.innerHTML = html

    const id = tempElement.querySelector("#first-name").id

    console.log("ID", id)
}) */

// name and profile pic
const appName = document.getElementById("app-name")
appName.textContent = firstName.value

function changeProfilePic() {
    profilePhoto.src = ""
}