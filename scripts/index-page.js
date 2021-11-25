const BANDSITE_API_URL = "https://project-1-api.herokuapp.com";
const BANDSITE_API_KEY = "113cb004-6433-4703-a473-71b16f421a08"; // Get an API key from https://project-1-api.herokuapp.com/register

let url = `${BANDSITE_API_URL}/comments?api_key=${BANDSITE_API_KEY}`;

function getCommentsApi() {
  const commentsApi = axios.get(url);
  commentsApi
    .then((response) => {
      const comments = response.data;

      //sorting the Comments to show the latest top
      comments.sort((a, b) => {
        var c = new Date(a.timestamp);
        var d = new Date(b.timestamp);
        return d - c;
      });

      createComments(comments);
    })
    .catch((error) => {
      console.log(error);
    });
}

getCommentsApi();
const commentsBody = document.querySelector(".comments");

function createComments(comments) {
  commentsBody.innerHTML = "";
  for (let i = 0; i < comments.length; i++) {
    let comment = comments[i];
    let commentsItem = displayComment(comment);
    commentsBody.appendChild(commentsItem);
  }
}

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
  commentsName.innerHTML = comment.name;

  //Create Pragraph for comment post time
  const commentsTime = document.createElement("span");
  commentsTime.classList.add("comments__time");
  commentsTime.innerText = dateFormatted(new Date(comment.timestamp));

  //Create comment message
  const commentsComment = document.createElement("p");
  commentsComment.classList.add("comments__comment");
  commentsComment.innerText = comment.comment;

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
    name: e.target.name.value,
    //timestamp: commentDate,
    comment: e.target.commentTextArea.value,
  };

  axios
    .post(url, newComment)
    .then((response) => {
      getCommentsApi();
    })
    .catch((error) => {
      console.log(error);
    });
  //comments.unshift(newComment);

  e.target.reset();
};

form.addEventListener("submit", formHandler);
