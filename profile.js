// username on profile page ****
const appUsername = document.getElementById("user-name")
appUsername.textContent = userName.value

// name and profile pic
const savedName = document.getElementById("saved-name")
const yourName = document.getElementById("your-name")
let profilePhoto = document.getElementById("profile-photo")

function changeProfilePic() {
    profilePhoto.src = ""
}

