let showsList = [
  {
    date: "Mon Sept 06 2021 ",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
    buttonText: "buy tciket",
  },
  {
    date: "Tue Sept 21 2021",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
    buttonText: "buy ticket",
  },
  {
    date: "Fri Oct 15 2021",
    venue: "View Lounge",
    location: "San Francisco, CA",
    buttonText: "buy ticket",
  },
  {
    date: "Sat Nov 06 2021",
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
    buttonText: "buy ticket",
  },
  {
    date: "Fri Nov 26 2021",
    venue: "Moscow Center",
    location: "San Francisco, CA",
    buttonText: "buy ticket",
  },
  {
    date: "Wed Dec 15 2021",
    venue: "Press Club",
    location: "San Francisco, CA",
    buttonText: "buy ticket",
  },
];

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

for (let i = 0; i < showsList.length; i++) {
  let show = showsList[i];
  let showsRows = displayShows(show);
  contentWrapper.appendChild(showsRows);
}

function displayShows(show) {
  let showsRow = document.createElement("div");
  showsRow.classList.add("shows__row");

  let showsHeaderDate = document.createElement("div");
  showsHeaderDate.classList.add("shows__header");
  showsHeaderDate.innerText = "Date";

  let showsDate = document.createElement("div");
  showsDate.classList.add("shows__details");
  showsDate.innerText = show.date;

  let showsHeaderVenue = document.createElement("div");
  showsHeaderVenue.classList.add("shows__header");
  showsHeaderVenue.innerText = "Venue";

  let showsVenue = document.createElement("div");
  showsVenue.classList.add("shows__details");
  showsVenue.innerText = show.venue;

  let ShowsHeaderLocation = document.createElement("div");
  ShowsHeaderLocation.classList.add("shows__header");
  ShowsHeaderLocation.innerText = "Location";

  let showsLocation = document.createElement("div");
  showsLocation.classList.add("shows__details");
  showsLocation.innerText = show.location;

  let buyTicket = document.createElement("button");
  let buttonText = document.createTextNode(show.buttonText);
  buyTicket.classList.add("primary-button");
  buyTicket.appendChild(buttonText);

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

//Active state
const rowsArray = document.querySelectorAll(".shows__row");

rowsArray.forEach((row) => {
  row.addEventListener("click", () => row.classList.toggle("selected"));
});
