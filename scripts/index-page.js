//Declare Variables
const form = document.querySelector(".form");
const commentsBody = document.querySelector(".comments");

function commentGenerator(fanName, message) {
  //Create comment row
  const commentsItem = document.createElement("div");
  commentsItem.classList.add("comments__item");

  //Create comment avatar
  const commentsAvatar = document.createElement("div");
  commentsAvatar.classList.add("comments__avatar");

  //Create comment Message wrapper
  const commentsMessage = document.createElement("div");
  commentsMessage.classList.add("comments__message");

  //Create Pragraph for comment name
  const commentsName = document.createElement("p");
  commentsName.classList.add("comments__name");
  commentsName.innerHTML = fanName;

  //Create Pragraph for comment post time
  const commentsTime = document.createElement("span");
  commentsTime.classList.add("comments__time");
  commentsTime.innerText = "02/17/2021";

  //Create comment message
  const commentsComment = document.createElement("p");
  commentsComment.classList.add("comments__comment");
  commentsComment.innerText = message;

  //Adding our Elements to HTML
  commentsBody.prepend(commentsItem);
  commentsItem.appendChild(commentsAvatar);
  commentsItem.appendChild(commentsMessage);
  commentsMessage.appendChild(commentsName);
  commentsName.appendChild(commentsTime);
  commentsMessage.appendChild(commentsComment);
}

// Function to Handle on submitting the form
const formHandler = (e) => {
  e.preventDefault();
  const fanName = e.target.name.value;
  const message = e.target.comment.value;

  //e.target.reset();
  commentGenerator(fanName, message);
};

form.addEventListener("submit", formHandler);
