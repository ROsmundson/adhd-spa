const BASE_URL = 'http://localhost:3000';
const factsContainer = document.getElementById("facts-container")
//1. use tasklister as example for building a next iteration of facts as we did with todos?
document.addEventListener('DOMContentLoaded', () => {
    console.log("Page has loaded");
});

function renderFacts(factoid){
    const factsCard = document.createElement("div");
    factsCard.id = "facts-card-title"
    factsCard.innerHTML = `<h3>${factoid.title}</h3>`;
    const factsContent = document.createElement("p");
    factsContent.textContent = `${factoid.fact}`;

    factsContainer.appendChild(factsCard);
    factsCard.append(factsContent);  
    }

        
//===============================================================

function fetchTheFacts() {
    fetch(BASE_URL + '/TheFacts')
    .then(response => response.json())
    .then(data => data.forEach(renderFacts));
    };

function initiateTheFacts() {
    fetchTheFacts();
}

initiateTheFacts()




//2. possible functions for grabbing/displaying/then delete on next fact click

////3. function to grab next fact and display/ then delete on next fact click

//This all the way through. Reminder =+ home and away will need to be handled 

//Stretch goal - ability to return to fact and continue iterating??? handle returning to page where left off???


