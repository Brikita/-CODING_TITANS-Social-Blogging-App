var followButtons = document.getElementsByClassName("followBtn");

function follow() {
  var button = event.target;
  if (button.innerHTML === "Follow") {
    button.innerHTML = "Following";
  } else {
    button.innerHTML = "Follow";
  }
}

for (var i = 0; i < followButtons.length; i++) {
  followButtons[i].addEventListener("click", follow);
}
