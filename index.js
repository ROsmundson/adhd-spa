document.addEventListener('DOMContentLoaded', () => {
    console.log("Page has loaded");
});

const BASE_URL = 'http://localhost:3000';
const homePage = document.getElementById("facts-page");
const aboutPage = document.getElementById("about-page");
const welcome = document.getElementById("welcome");
const welcomeButton = document.createElement('button');
const factsSection = document.getElementById("facts-container");
const commentsForm = document.querySelector("#comment-form")
const br = document.createElement("br");
const hr = document.createElement("hr");


function makeFactsCards(facts) {
    welcomeButton.id = "welcome-button";
    welcomeButton.className = "cards-button";
    welcomeButton.textContent = "Read the Facts"
    const factsCards = document.createElement("div");
    factsCards.id = `facts-card-${facts.id}`;
    factsCards.className = "facts-cards";
    const factsImage = document.createElement('img')
    factsImage.src = facts.image;
    factsImage.id = `image-${facts.id}`
    factsImage.className = "images";
    const factsTitle = document.createElement("h1");
    factsTitle.textContent = facts.title;
    const factsContent = document.createElement("h3");
    factsContent.textContent = facts.fact;
    welcome.append(welcomeButton);
    factsSection.append(factsCards);
    factsCards.append( factsTitle,factsImage, factsContent, br, br);
    factsSection.style.display = "none";
}

function getFacts() {  
    fetch(BASE_URL + '/TheFacts')
    .then(response => response.json())
    .then(facts => {
        facts.forEach(fact => makeFactsCards(fact));
        makeFacts(facts);
    })
    .catch(error => console.log(error));
}

function makeFacts() {
    welcomeButton.addEventListener("click", () => {
        welcome.style.display = "none";
        factsSection.style.display = "block";
        let title = document.querySelector("#title");
        title.textContent = "Did You Know";
    })
}


function getComments() {
    fetch(BASE_URL + '/comments/')
    .then(response => response.json())
    .then(comments => {
        comments.forEach(makeCommentCards);
        console.log("great success")
        
    })
    .catch(error => console.log(error, "there's something wrong"))
};

function makeCommentCards(comments) {
    const commentsContainer = document.getElementById("comments-container")
    const commentCard = document.createElement('div');
    const commentTitle = document.createElement("h3");
    const commentContent = document.createElement("p");
    commentCard.id = `{comment-${comments.id}`;
    commentCard.className = "comment-cards";
    commentTitle.textContent = comments.title;
    commentContent.textContent = comments.comment;
    commentsContainer.append(hr ,commentCard);
    commentCard.append(commentTitle, commentContent);
}

function postComments() {
    commentsForm.addEventListener("submit", (e) => {
        e.preventDefault();

        makeCommentCards(console.log(e.target.value))
    })
}

function navHome() {
    const homeButton = document.getElementById("home");
    homeButton.addEventListener('click', () => {
        homePage.style.display = "none" ? homePage.style.display = "block" : homePage.style.display = "block";
        factsSection.style.display = "block" ? factsSection.style.display = "none" : factsSection.style.display = "none";
        aboutPage.style.display = "block" ? aboutPage.style.display = "none" : aboutPage.style.display = "none";
        welcome.style.display = "none" ? welcome.style.display = "block" : welcome.style.display = "block";
        
    });
};

function navAbout() {
    const aboutButton = document.getElementById("about");
    aboutButton.addEventListener('click', () => {
        aboutPage.style.display = "none" ? aboutPage.style.display = "block" : aboutPage.style.display = "block";
        factsSection.style.display = "block" ? factsSection.style.display = "none" : factsSection.style.display = "none";
        homePage.style.display = "block" ? homePage.style.display = "none" : homePage.style.display = "none";
        title.textContent = ""
    });
};





function initiateFactsApp() {
    getFacts();
    getComments();
    postComments();
    navHome();
    navAbout();                        
}

initiateFactsApp();    