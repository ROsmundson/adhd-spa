//Page load notification
document.addEventListener('DOMContentLoaded', () => {
    console.log("Page has loaded");
});

//Main Node grabbers:
const BASE_URL = 'http://localhost:3000';
const factsContainer = document.getElementById("facts-container");
const factsCards = document.getElementsByClassName("facts-cards");
const welcome = document.getElementById("welcome");
const welcomeButton = document.getElementById("welcome-button") 
const cardsButton = document.createElement("button");
cardsButton.textContent = "Read the Facts";


//const homeNav = document.getElementById("home")
//const awayNav = document.getElementById("about-me")
//const userStoryContainer = document.getElementById("")
//----------------------------------------------------------------


function createFactsCards(factoid){
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
    .then(facts => loadFacts(facts));
}

function loadFacts(facts) {
    let cards = facts
    welcomeButton.addEventListener('click', () => {
        welcome.remove();
        welcomeButton.remove();
        let button = document.querySelector('button');
            for(let i = 0; i < cards.length; i++) {
                let card = cards[i];
                //console.log(card);
                if(card === cards[i]){
                switch (card.id) {
                    case 1:
                        createFactsCards(card);
                        button = document.querySelector('button')
                        button.addEventListener('click', () => {
                                    cards = cards.slice(1);
                        console.log(factsCards)
                        let currentFact = factsCards
                        currentFact.remove()
                        let nextFact = cards[i];
                                    console.log(nextFact)
                                    createFactsCards(nextFact);
                        })
                }
            }
        }
    })
}
      
  

                            

                 
                    

                            
       

function removeCard(cards) {
    console.log(cards);
}
        
        
        
        function save() {
            // for(let i = 0; i < cards.length; i++) {
            // if(facts[i].id = facts[i].id)
            // renderFacts(facts[i]);
            // let currentFact = document.getElementById('fact-card-1');
            // console.log(currentFact);
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