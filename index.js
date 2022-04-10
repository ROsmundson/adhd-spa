//Page load notification
document.addEventListener('DOMContentLoaded', () => {
    console.log("Page has loaded");
});

//Main Node grabbers:
const BASE_URL = 'http://localhost:3000';
const factsContainer = document.getElementById("facts-container");
const factsCards = document.getElementsByClassName("facts-cards");
const factCard = document.getElementsByClassName("facts-cards")
const cardsButton = document.createElement("button");
cardsButton.textContent = "Read the Facts";
const currentFact = document.getElementsByClassName("facts-cards");


//const homeNav = document.getElementById("home")
//const awayNav = document.getElementById("about-me")
//const userStoryContainer = document.getElementById("")
//----------------------------------------------------------------


function renderFacts(factoid){
    const factsCards = document.createElement("div");
    factsCards.id = `fact-card-${factoid.id}`;
    factsCards.className = "facts-cards";
    const factsTitle = document.createElement("h3");
    factsTitle.textContent = `${factoid.title}`;
    const factsContent = document.createElement("p");
    factsContent.textContent = `${factoid.fact}`;
    factsContainer.append(factsCards);
    factsCards.append(factsTitle, factsContent);
    factsContainer.appendChild(cardsButton);
}    

function fetchFacts() {
    fetch(BASE_URL + '/TheFacts')
    .then(response => response.json())
    .then(facts => {
        loadCards(facts);
        //removeCards(facts);
    })
}

function loadCards(facts) {
    let cards = facts
        factsContainer.appendChild(cardsButton);
        cardsButton.addEventListener("click", () => {
            cardsButton.textContent = "Read Another Fact!";
            for (let i = 0; i < cards.length; i++) {
                console.log(factCard);
                renderFacts(cards[i])
                console.log(cards[i]);
                console.log(factsContainer);
                console.log(cardsButton);

            }

    })
}


function removeCards() {
    
}
            // for(let i = 0; i < cardsButton; i++) {
            //     cards.forEach(() => console.log(cards));
            //         let card = facts[i];
            //         let buttonId = `${card.id}`
            // }

            


function initiateFactsApp() {
    fetchFacts();
}

initiateFactsApp();////END 0F CODE!!!                   