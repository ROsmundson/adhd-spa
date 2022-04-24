document.addEventListener('DOMContentLoaded', () => {
    console.log("Page has loaded");
});

const BASE_URL = 'http://localhost:3000';
const welcome = document.getElementById("welcome");
const welcomeButton = document.createElement('button');

const factsContainer = document.getElementById("facts-container");
const homePage = document.getElementById("facts-page");

const aboutPage = document.getElementById("about-page");

const commentForm = document.getElementById("comment-form");


function createFactsCards(facts) {
    welcomeButton.id = "welcome-button";
    welcomeButton.className = "cards-button";
    welcomeButton.textContent = "Read the Facts"
    const factsCards = document.createElement("div");
    factsCards.id = `facts-card-${facts.id}`;
    factsCards.className = "facts-cards";
    const br = document.createElement("br")
    const factsImage = document.createElement('img')
    factsImage.src = facts.image;
    factsImage.id = `image-${facts.id}`
    factsImage.className = "images";
    const factsTitle = document.createElement("h1");
    factsTitle.textContent = facts.title;
    const factsContent = document.createElement("h3");
    factsContent.textContent = facts.fact;
    welcome.append(welcomeButton);
    factsContainer.append(factsCards);
    factsCards.append( factsTitle,factsImage, factsContent, br, br);
    factsContainer.style.display = "none";
}

function fetchFacts() {  
    fetch(BASE_URL + '/TheFacts')
    .then(response => response.json())
    .then(facts => {
        facts.forEach(fact => createFactsCards(fact));
        welcomeToFacts(facts);
    })
    .catch(error => console.log(error));
}

function welcomeToFacts() {
    welcomeButton.addEventListener("click", () => {
        welcome.style.display = "none";
        factsContainer.style.display = "block";
        let title = document.querySelector("#title");
        title.textContent = "Did You Know";
    })
}

function navHome() {
    const homeButton = document.getElementById("home");
    homeButton.addEventListener('click', () => {
        homePage.style.display = "none" ? homePage.style.display = "block" : homePage.style.display = "block";
        factsContainer.style.display = "block" ? factsContainer.style.display = "none" : factsContainer.style.display = "none";
        aboutPage.style.display = "block" ? aboutPage.style.display = "none" : aboutPage.style.display = "none";
        welcome.style.display = "none" ? welcome.style.display = "block" : welcome.style.display = "block";
        
    });
};

function navAbout() {
    const aboutButton = document.getElementById("about");
    aboutButton.addEventListener('click', () => {
        aboutPage.style.display = "none" ? aboutPage.style.display = "block" : aboutPage.style.display = "block";
        factsContainer.style.display = "block" ? factsContainer.style.display = "none" : factsContainer.style.display = "none";
        homePage.style.display = "block" ? homePage.style.display = "none" : homePage.style.display = "none";
        title.textContent = ""
    });
};

function createComments(comment) {
    const commentContainer = document.getElementById("user-comments");
    console.log(commentContainer)
    const userCard = document.getElementById
    userCard.id = comment.id;
    userCard.title = `${comment.name} had this to share:`;
    userCard.textContent = comment.comment;
    const br = document.createElement("br");
    commentContainer.append(userCard, br);
}
function fetchUserComments() {
        fetch(BASE_URL + '/comments')
        .then(response => response.json())
        .then(comments => {
            comments.forEach(createComments);
        })
        .catch(error => console.log(error))
}

function postComments() {
    fetch(BASE_URL + '/comments', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(comments),
    })
    .then(response => response.json())
    .then(comments => {
        forEach(createComments(comments))
    })
    .catch(error => console.log(error))
};
 

//end of code. ititiateFactsApp() up top.


function initiateFactsApp() {
    fetchFacts();
    navHome();
    navAbout();
    
}

initiateFactsApp();////END 0F CODE!!!    