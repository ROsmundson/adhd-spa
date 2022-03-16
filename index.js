//Main Node grabbers:
const BASE_URL = 'http://localhost:3000';
const homeNav = document.getElementById("home")
const awayNav = document.getElementById("about-me")
const factsContainer = document.getElementById("facts-container")
const userStoryContainer = document.getElementById("")
//----------------------------------------------------------------
//Page load notification
document.addEventListener('DOMContentLoaded', () => {
    console.log("Page has loaded");
});

//construct and prepare nodes to be rendered upon fetch
function renderFacts(factoid){
    const factsCard = document.createElement("div");
    factsCard.id = "facts-card"
    factsCard.innerHTML = `<h3>${factoid.title}</h3>`;

    const factsContent = document.createElement("p");
    factsContent.textContent = `${factoid.fact}`;
    const nextButton = document.createElement("button")
    nextButton.id = "next-button";
    nextButton.innerText = "Read Next Fact";

    factsContainer.appendChild(factsCard);
    factsCard.append(factsContent);
    factsCard.append(nextButton);
};


//===============================================================
function loadFirstFact() {
    fetch(BASE_URL + '/TheFacts')
    .then(response => response.json())
    .then(data => {
        renderFacts(data[0]);
    }).catch(error => {
        console.error('Error:', error);
    })
    
};

function loadNewFact() {
        fetch(BASE_URL + '/TheFacts')
        .then(response => response.json())
        .then(data => {
            nextButton = document.getElementById('next-button');
            currentFact = document.getElementById('facts-card')
            nextButton.addEventListener("click", () => {
            newFactsList = data.slice(1);
            currentFact.remove();
            renderFacts(newFactsList[0])
            })
        });
}


function initiateTheFacts() {
    loadFirstFact();
    loadNewFact();
};

initiateTheFacts();
