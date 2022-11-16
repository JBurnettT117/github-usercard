const { default: axios } = require("axios");
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
function getUserData(userID) {
  let response;
  axios.get(`https://api.github.com/users/${userID}`)
 .then(result => {
  console.log(cardMaker(result));
  
 })
 .catch(err => {
  console.error(err);
 })
 .finally(() => console.log("loading complete"));
}



/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
function cardMaker(response) {
  console.log(response);

  const card = document.createElement("div");
  const img = document.createElement("img");
  const info = document.createElement("div");
  const name = document.createElement("h3");
  const username = document.createElement("p");
  const location = document.createElement("p");
  const profile = document.createElement("p");
  const address = document.createElement("a");
  const followers = document.createElement("p");
  const following = document.createElement("p");
  const bio = document.createElement("p");

  card.classList.add("card");
  info.classList.add("card-info");
  name.classList.add("name");
  username.classList.add("username");

  card.appendChild(img);
  card.appendChild(info);

  info.appendChild(name);
  info.appendChild(username);
  info.appendChild(location);
  info.appendChild(profile);
  info.appendChild(followers);
  info.appendChild(following);
  info.appendChild(bio);

  profile.appendChild(address);

  img.src = `${response.data.avatar_url}`;
  name.textContent = `${response.data.name}`;
  location.textContent = `${response.data.location}`;
  address.textContent = `${response.data.html_url}`;
  followers.textContent = `${response.data.followers}`;
  following.textContent = `${response.data.following}`;
  bio.textContent = `${response.data.bio}`;

  document.querySelector(".cards").appendChild(card);

  return card;
}

getUserData("JBurnettT117");
getUserData("tetondan");


/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
