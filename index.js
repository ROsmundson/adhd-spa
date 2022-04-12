//Page load notification
document.addEventListener('DOMContentLoaded', () => {
    console.log("Page has loaded");
});

//Card Container Elements:
const welcome = document.createElement("h3")
const cards = document.createElement("div");
const factsTitle = document.createElement("h3");
const factsContent = document.createElement("p");
const button = document.createElement("button") 

//Main Node grabbers:
const BASE_URL = 'http://localhost:3000';
const homeButton = document.querySelector("#home");
const aboutPage = document.querySelector("#about-page")
const homePage = document.querySelector("#home-page")
button.textContent = "Read the Facts";
const aboutButton = document.querySelector("#about");
const welcomeCard = document.getElementById('welcome-card');
const factsContainer = document.getElementById("facts-container");
const factsCards = document.getElementsByClassName("facts-cards");
//const userStoryContainer = document.getElementById("")

function createWelcomeCard(welcome) {
    welcome.id = "welcome-card";
    welcome.className = "facts-cards";
    welcome.innerHTML = "<ul><ul>Most people have heard of it.</ul><br><ul>Many feel like they understand it</ul><br><ul>Here are some facts about ADHD you might not have heard!</ul></ul>";
    factsContainer.append(welcome);
    factsContainer.appendChild(button);
    
}
function createFactsCards(factoid){
    factsCards.id = `fact-card-${factoid.id}`;
    factsCards.className = "facts-cards";
    factsTitle.textContent = `${factoid.title}`;
    factsContent.textContent = `${factoid.fact}`;
    factsContainer.append(factsCards, factsTitle, factsContent);
}


function fetchFacts() {
    fetch(BASE_URL + '/TheFacts')
    .then(response => response.json())
    .then(facts => {
        loadFacts(facts);
    })
}

function loadFacts(facts) {
    createWelcomeCard(welcome);
    factsContainer.appendChild(button);
    console.log(facts)
        for(let i = 0; i < facts.length; i++) {
            let cards = facts
            facts.forEach(() => {
                createFactsCards(facts)
            })
        }
    }
        
 //factsContainer.appendChild(button);
        // button.addEventListener('click', () => {
        //     for(let i = 0; i < cards.length; i++) {
        //         let card = cards[i]
        //         console.log(card)
        //         createFactsCards(card);
        //         let cardId = cards[i].id
        //         if(cardId = factsCards[i]){
        //             console.log(cardId)

//         })
//     })
// }
function navHome() {
    homeButton.addEventListener('click', () => {
            console.log('home button clicked')

    });
};

function navAbout() {
    aboutButton.addEventListener('click', () => {
        console.log('about button clicked')
    })
}
            


function initiateFactsApp() {
    fetchFacts();
    navHome();
    navAbout();
}

initiateFactsApp();////END 0F CODE!!!                   