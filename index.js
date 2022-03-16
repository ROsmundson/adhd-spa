//Main Node grabbers:
const BASE_URL = 'http://localhost:3000';
const factsContainer = document.getElementById("facts-container")
//const homeNav = document.getElementById("home")
//const awayNav = document.getElementById("about-me")
//const userStoryContainer = document.getElementById("")
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

function loadFact() {
    fetch(BASE_URL + '/TheFacts')
    .then(response => response.json())
    .then(data => {
        let facts = data;
        renderFacts(facts[0]);
        let nextButton = document.getElementById('next-button')
        nextButton.addEventListener('click', () => {
            //console.log('I heard you!')
            deleteCurrentFact();
            facts = data.slice(1)
            //console.log(facts)
            renderFacts(facts[0])

        });
        
    }).catch(error => {
        console.error('Error:', error);
    })
};

function deleteCurrentFact(){
    let currentFact = document.getElementById('facts-card');
    currentFact.remove();
    console.log(renderFacts)
}


function initiateTheFacts() {
    loadFact()
};

initiateTheFacts();
        