// VARIABLES

let messages = [   
    {
        userName: 'user1', 
        message: "Hello, Will there be a meeting today"
    } , 
    {
        userName: 'user2',
        message: "Hello, I am Brian what about you?"
    } , 
    {
        userName: 'user3',
        message: "Are you coming today?"
    } , 
    {
        userName: 'user4',
        message: "Is it today or tommorow?"}
]

const unreadMessages = document.getElementById('unread');
//const users = document.querySelectorAll('.user');
//const messageDisplay = document.querySelectorAll('.unread-messages');
const searchBtn = document.getElementById('search-btn');
let searchBar = document.getElementById('search-bar');
const searchResult = document.getElementById('search-msg');

// Creating elements based on the number of messages
for (let i = 0; i < messages.length ; i++ ){
    const users = messages[i];

    const userDiv = document.createElement('div');
    userDiv.classList.add('unread');

    const name = document.createElement('div');
    name.textContent = users.userName;
    name.classList.add('user');

    const messageDisplay = document.createElement('div');
    messageDisplay.textContent = users.message;
    messageDisplay.classList.add('unread-messages');

    userDiv.appendChild(name);
    userDiv.appendChild(messageDisplay)

    unreadMessages.appendChild(userDiv)
}



//Displaying the users


/* for (let i = 0 ; i < users.length ; i++ ) {
    users[ i ].textContent = messages[i].userName;    
}

// display the messages
for (let i = 0 ; i < messageDisplay.length ; i++ ){
    messageDisplay[i].textContent = messages[i].message;
} */


//Search Bar
searchBtn.addEventListener('click', function(){
    const searchMsg = searchBar.value;
    let result = []
    for (let i = 0 ; i < messages.length ; i++){
        if ( messages[i].userName === searchMsg ){
            result = messages[i].userName+": " +messages[i].message;
        }else{
            result = "Friend not found"
        }

    }
    searchResult.textContent = result;
    console.log(result)
    searchResult.classList.remove('hidden')
    
});
//search Result

searchResult.classList.add('hidden');
