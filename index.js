document.addEventListener('DOMContentLoaded', () => {
    console.log("Page has loaded");
});

const BASE_URL = 'http://localhost:3000';
const welcome = document.getElementById("welcome");
const welcomeButton = document.createElement('button');
const factsContainer = document.getElementById("facts-container");
const cards = document.getElementsBy
const factsPage = document.getElementById("facts-page")
const aboutPage = document.getElementById("about-page")

function createFactsCards(facts) {
    welcomeButton.id = "welcome-button";
    welcomeButton.className = "cards-button";
    welcomeButton.textContent = "Read the Facts"
    const factsCards = document.createElement("div");
    factsCards.id = `facts-card-${facts.id}`;
    factsCards.className = "facts-cards";
    const br = document.createElement("br")
    const factsImage = document.createElement('img')
    factsImage.src = `${facts.image}`
    factsImage.id = `image-${facts.id}`
    factsImage.className = "images";
    const factsTitle = document.createElement("h1");
    factsTitle.textContent = `${facts.title}`;
    const factsContent = document.createElement("h3");
    factsContent.textContent = `${facts.fact}`;
    const cardsButton = document.createElement('button')
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
        welcomeToFacts(facts)
    })
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
        factsPage.style.display = "none" ? factsPage.style.display = "block" : factsPage.style.display = "block";
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
        factsPage.style.display = "block" ? factsPage.style.display = "none" : factsPage.style.display = "none";
        title.textContent = ""
    });
};

let comments = { 
    id: 1, 
    name: "name",
    comment: "comment"
    }

function commentPosts() {
    fetch(BASE_URL + '/comments', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(comments),
    })
    .then(response => response.json())
    .then(comments => {
        console.log('Success', comments);
    })
    // .catch(error => {
    //     console.log(error);
    // })
}

function loadComments() {

}

function renderComment(comment) {

}



//end of code. ititiateFactsApp() up top.


function initiateFactsApp() {
    fetchFacts();
    navHome();
    navAbout();
    commentPosts();
    
}

initiateFactsApp();////END 0F CODE!!!    