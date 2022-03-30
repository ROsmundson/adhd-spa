
    //Page load notification
document.addEventListener('DOMContentLoaded', () => {
    console.log("Page has loaded");
});

//Main Node grabbers:
const BASE_URL = 'http://localhost:3000';
const factsContainer = document.getElementById("facts-container");
const factsCard = document.getElementsByClassName("facts-cards")


//const homeNav = document.getElementById("home")
//const awayNav = document.getElementById("about-me")
//const userStoryContainer = document.getElementById("")
//----------------------------------------------------------------
function renderFacts(factoid){
    const factsCard = document.createElement("div");
    factsCard.id = `fact-card-${factoid.id}`;
    factsCard.className = "facts-cards";
    factsCard.style.display = 'none'
    const factsTitle = document.createElement("h3");
    factsTitle.textContent = `${factoid.title}`;
    const factsContent = document.createElement("p");
    factsContent.textContent = `${factoid.fact}`;     
    const factsButton = document.getElementById("facts-button");
    factsButton.id = "facts-button"
    factsButton.className = "facts-button";
    factsButton.textContent = "Read Next Fact";
    const br = document.createElement("br");
    factsContainer.append(factsCard);
    factsCard.append(factsTitle, factsContent);
    factsCard.appendChild(br);
    factsContainer.append(factsButton);
    }

function fetchFacts() {
    fetch(BASE_URL + '/TheFacts')
    .then(response => response.json())
    .then(data => {
        let facts = data;
        facts.forEach(renderFacts);
        
        
//         document.getElementById("okButton")
//         .addEventListener("click", function() {
//   document.getElementById("welcome").hidden = true;
//   document.getElementById("awesome").hidden = false;
// }, false);
    })
}

function loadRemoveFacts(data) {

}
// let cars = ["Tesla", "Ferrari", "Lamborghini", "Audi"];

// for(let i = 0; i < cars.length; i++) {
//   console.log(cars[i]);

            
                
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


    

            
                
                    