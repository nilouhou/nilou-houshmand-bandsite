const BANDSITE_API_URL = "https://project-1-api.herokuapp.com";
const BANDSITE_API_KEY = "113cb004-6433-4703-a473-71b16f421a08"; // Get an API key from https://project-1-api.herokuapp.com/register

let url = `${BANDSITE_API_URL}/showdates?api_key=${BANDSITE_API_KEY}`;

const showApi = axios.get(url);
showApi
  .then((response) => {
    const showList = response.data;
    console.log(showList);
    showList.forEach((show) => {
      let showsRows = displayShows(show);
      contentWrapper.appendChild(showsRows);
    });
  })
  .catch((error) => console.error(error));

const showsBody = document.querySelector(".shows");

//Create Show Page Header
let pageHeaderWrapper = document.createElement("div");
const showPageHeader = document.createElement("h2");
showPageHeader.classList.add("section-header");
showPageHeader.innerText = "Shows";
pageHeaderWrapper.appendChild(showPageHeader);
showsBody.appendChild(pageHeaderWrapper);

//Header for tablet and desktop
let contentWrapper = document.createElement("div");
contentWrapper.classList.add("shows__wrapper");
let showsRowTop = document.createElement("div");
showsRowTop.classList.add("shows__row", "shows__row--top");

let showsHeaderDateTop = document.createElement("div");
showsHeaderDateTop.classList.add("shows__top-header");
showsHeaderDateTop.innerText = "Date";

let showsHeaderVenueTop = document.createElement("div");
showsHeaderVenueTop.classList.add("shows__top-header");
showsHeaderVenueTop.innerText = "Venue";

let ShowsHeaderLocationTop = document.createElement("div");
ShowsHeaderLocationTop.classList.add("shows__top-header");
ShowsHeaderLocationTop.innerText = "Location";

//Tablet and Desktop views Headers
showsRowTop.appendChild(showsHeaderDateTop);
showsRowTop.appendChild(showsHeaderVenueTop);
showsRowTop.appendChild(ShowsHeaderLocationTop);
contentWrapper.appendChild(showsRowTop);
showsBody.appendChild(contentWrapper);

function displayShows(show) {
  let showsRow = document.createElement("div");
  showsRow.classList.add("shows__row");

  let showsHeaderDate = document.createElement("div");
  showsHeaderDate.classList.add("shows__header");
  showsHeaderDate.innerText = "Date";

  let showsDate = document.createElement("div");
  showsDate.classList.add("shows__details");

  showsDate.innerText = dateFormat(new Date(Number(show.date)))
    .split(",")
    .join(" ");

  let showsHeaderVenue = document.createElement("div");
  showsHeaderVenue.classList.add("shows__header");
  showsHeaderVenue.innerText = "Venue";

  let showsVenue = document.createElement("div");
  showsVenue.classList.add("shows__details");
  showsVenue.innerText = show.place;

  let ShowsHeaderLocation = document.createElement("div");
  ShowsHeaderLocation.classList.add("shows__header");
  ShowsHeaderLocation.innerText = "Location";

  let showsLocation = document.createElement("div");
  showsLocation.classList.add("shows__details");
  showsLocation.innerText = show.location;

  let buyTicket = document.createElement("button");
  buyTicket.classList.add("primary-button");
  buyTicket.innerText = "Buy Ticket";

  //Adding our Elements to HTML

  //Mobile view Headers
  showsRow.appendChild(showsHeaderDate);
  showsRow.appendChild(showsDate);
  showsRow.appendChild(showsHeaderVenue);
  showsRow.appendChild(showsVenue);
  showsRow.appendChild(ShowsHeaderLocation);
  showsRow.appendChild(showsLocation);
  showsRow.appendChild(buyTicket);

  return showsRow;
}

//Active state For the Shows information row
const rowsArray = document.querySelectorAll(".shows__row");

rowsArray.forEach((row) => {
  row.addEventListener("click", () => row.classList.toggle("selected"));
});

//Date formatter for Show page

function dateFormat(date) {
  const options = {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  date = date.toLocaleDateString("en-US", options);
  return date;
}
