//Page load notification
document.addEventListener('DOMContentLoaded', () => {
    console.log("Page has loaded");
});

//Main Node grabbers:
const BASE_URL = 'http://localhost:3000';
const factsContainer = document.getElementById("facts-container");
const factsCards = document.getElementsByClassName("facts-cards");

//const homeNav = document.getElementById("home")
//const awayNav = document.getElementById("about-me")
//const userStoryContainer = document.getElementById("")
//----------------------------------------------------------------


function renderFacts(factoid){
    const factsCards = document.createElement("div");
    factsCards.id = `fact-card-${factoid.id}`;
    factsCards.className = "facts-cards";
    factsCards.style.display = 'none';
    const factsTitle = document.createElement("h3");
    factsTitle.textContent = `${factoid.title}`;
    const factsContent = document.createElement("p");
    factsContent.textContent = `${factoid.fact}`;     
    const factsButton = document.createElement("facts-button");
    factsButton.id = `"fact-button-${factoid.id}`;
    factsButton.className = "facts-buttons";
    factsButton.textContent = "Read Next Fact";
    const br = document.createElement("br");
    factsContainer.append(factsCards);
    factsCards.append(factsTitle, factsContent);
    factsCards.appendChild(br);
    factsCards.append(factsButton);
    }

function fetchFacts() {
    fetch(BASE_URL + '/TheFacts')
    .then(response => response.json())
    .then(facts => {
        facts.forEach(renderFacts);
        loadRemoveFacts(facts);

    })
}

function loadRemoveFacts(facts) {
    let factsButtons = Array.from(document.getElementsByClassName('facts-buttons'));
    let factsCards = Array.from(document.getElementsByClassName('facts-cards'));
    let i;
    factsButtons.forEach(button => {
        button.addEventListener("click", () => {
            factsCards.forEach(card => {
                let cardId = card.id
                console.log(cardId);
            })
            
            })
        })
    }

           
    



function initiateFactsApp() {
    fetchFacts();
}

initiateFactsApp();////END 0F CODE!!!                   