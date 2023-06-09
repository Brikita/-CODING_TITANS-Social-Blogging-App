const likeButton = document.getElementById("like-button")
const commentButton = document.getElementById("comment-btn")
const commentInput = document.getElementById("comment-input")

//likes


//likes functionality
let likes = 0;

function addLikes(){
    const likeCount = document.getElementById("like-count")
likes++;
likeCount.textContent = likes;
}



/*
//comments functionality
const commentList = document.getElementById("comment-list")
const commentBtn = document.getElementById("comment-btn")
const commentForm = document.getElementById("comment-form")
const commentInput = document.getElementById("comment-input")



/*commentForm.addEventListener("submit", function(event){
event.preventDefault();
let comment = commentInput.value;

}
)*/
let comments = []

commentButton.addEventListener("click", function(){
    comments.push(commentInput.value)
    commentInput.value = " "
    renderComments()
})

function renderComments()
let comm = ""
for (let i =0; i < comments.length; i++) {
    comm += "<li>" + comments[i] + "</li>"
}
commentList.innerHTML = comm
 
let li = document.createElement('li')
li.textContent = comments[i]
commentList.append(li)














