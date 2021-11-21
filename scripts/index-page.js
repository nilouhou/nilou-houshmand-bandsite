// Arrays of comments
let comments = [
  {
    fanName: "Connor Walton",
    timestamp: "02/17/2021",
    text: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },

  {
    fanName: "Emilie Beach",
    timestamp: "01/09/2021",
    text: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },

  {
    fanName: "Miles Acosta",
    timestamp: "12/20/2020",
    text: "Lead EducatorI can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];

const commentsBody = document.querySelector(".comments");

function createComments(comments) {
  commentsBody.innerHTML = "";
  for (let i = 0; i < comments.length; i++) {
    let comment = comments[i];
    let commentsItem = displayComment(comment);
    commentsBody.appendChild(commentsItem);
  }
}

createComments(comments);
function displayComment(comment) {
  //Create comment row
  let commentsItem = document.createElement("div");
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
  commentsName.innerHTML = comment.fanName;

  //Create Pragraph for comment post time
  const commentsTime = document.createElement("span");
  commentsTime.classList.add("comments__time");
  commentsTime.innerText = comment.timestamp;

  //Create comment message
  const commentsComment = document.createElement("p");
  commentsComment.classList.add("comments__comment");
  commentsComment.innerText = comment.text;

  //Adding our Elements to HTML
  commentsItem.appendChild(commentsAvatar);
  commentsItem.appendChild(commentsMessage);
  commentsMessage.appendChild(commentsName);
  commentsName.appendChild(commentsTime);
  commentsMessage.appendChild(commentsComment);

  return commentsItem;
}

// Formatting the Date
function dateFormatted(date) {
  let dd = date.getDate();
  let mm = date.getMonth() + 1;
  let yyyy = date.getFullYear();

  if (dd < 10) {
    dd = "0" + dd;
  }

  if (mm < 10) {
    mm = "0" + mm;
  }

  date = mm + "/" + dd + "/" + yyyy;
  return date;
}

// Form Handeling
const form = document.querySelector(".form");

const formHandler = (e) => {
  e.preventDefault();

  let commentDate = dateFormatted(new Date());

  let newComment = {
    fanName: e.target.name.value,
    timestamp: commentDate,
    text: e.target.commentTextArea.value,
  };

  comments.unshift(newComment);

  createComments(comments);
  e.target.reset();
};

form.addEventListener("submit", formHandler);
