const unreadMessages = document.getElementById("unread-messages")
const search = document.getElementById("search")
const searchMsg = document.getElementById("search-msg")
const searchBtn = document.getElementById("search-btn")
const returnMsg = document.getElementById("unread-1")
let msg = {}
localStorage.setItem(
    msg1 , "contact1"
     
)




unreadMessages.textContent = "Unread Messages"


searchBtn.addEventListener("click", function() {
    if (search === "" ) {
        searchMsg.textContent = "Cannot Be empty"
} else {
   let searchitem = search.value
   for (let i = 0; i < msg.length; i++){
    if (search.value == msg[i]){
        returnMsg.textContent = msg[i] 
    }
   }
}
}
)