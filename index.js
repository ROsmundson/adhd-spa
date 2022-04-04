
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
    factsButton.className = "facts-button";
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
    .then(data => {
        data.forEach(renderFacts);
        loadRemoveFacts(data);

    })
}

function loadRemoveFacts() {
    let facts = document.getElementsByClassName("facts-cards")
    factsList = Array.from(facts);
        factsList.forEach((fact) => {
            console.log(fact.)
            fact.style.display = 'block';
        })
    }

  
 
            // switch (expr) {
            //     case 'Oranges':
            //       console.log('Oranges are $0.59 a pound.');
            //       break;
            //     case 'Apples':
            //       console.log('Apples are $0.32 a pound.');
            //       break;
            //     case 'Bananas':
            //       console.log('Bananas are $0.48 a pound.');
            //       break;
            //     case 'Cherries':
            //       console.log('Cherries are $3.00 a pound.');
            //       break;
            //     case 'Mangoes':
            //     case 'Papayas':
            //       console.log('Mangoes and papayas are $2.79 a pound.');
            //       break;
            //     default:
            //       console.log('Sorry, we are out of ' + expr + '.');
            //   }
              
            //   console.log("Is there anything else you'd like?");

function initiateFactsApp() {
    fetchFacts();

    //handleClick();
}

initiateFactsApp();////END 0F CODE!!!                   