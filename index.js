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

function initiateFactsApp() {
    loadFact();

//construct and prepare nodes to be dynamically rendered upon fetch
function renderFact(factoid){
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

    nextButton.addEventListener('click', () => {
        factsCard.replaceChildren();
        renderFact();
        //after removing fact 1, render next fact from facts array

    })
};

function loadFact() {
    fetch(BASE_URL + '/TheFacts')
    .then(response => response.json())
    .then(data => {
        let facts = data;
        renderFact(facts[0]);
            facts = data.slice(1);
            for (let i = 0; i < facts.length; i++) { 
                const fact = facts[i];
                renderFact(`facts[${i}]!`);
            };
    }).catch(error => {
        console.error('Error:', error);
    })
};
    
};

initiateFactsApp();
        