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