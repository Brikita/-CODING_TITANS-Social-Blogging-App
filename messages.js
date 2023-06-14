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
        message: "Are you coming today"
    } , 
    {
        userName: 'user4',
        message: "Is it today or tommorow"}
]


const users = document.querySelectorAll('.user');
const messageDisplay = document.querySelectorAll('.unread-messages');
const searchBtn = document.getElementById('search-btn');
let searchBar = document.getElementById('search-bar');
const searchResult = document.getElementById('search-msg');


//Displaying the users


for (let i = 0 ; i < users.length ; i++ ) {
    users[ i ].textContent = messages[i].userName;    
}

// display the messages
for (let i = 0 ; i < messageDisplay.length ; i++ ){
    messageDisplay[i].textContent = messages[i].message;
}

//Search Bar
searchBtn.addEventListener('click', function(){
    const searchMsg = searchBar.value;
    let result = []
    for (let i = 0 ; i < messages.length ; i++){
        if ( messages[i].userName === searchMsg ){
            result = messages[i].userName+": " +messages[i].message;
        }

    }
    searchResult.textContent = result;
    console.log(result)
    
});

