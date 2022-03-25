
    //Page load notification
document.addEventListener('DOMContentLoaded', () => {
    console.log("Page has loaded");
});

//Main Node grabbers:
const BASE_URL = 'http://localhost:3000';
const factsContainer = document.getElementById("facts-container");


//const homeNav = document.getElementById("home")
//const awayNav = document.getElementById("about-me")
//const userStoryContainer = document.getElementById("")
//----------------------------------------------------------------
function renderFacts(factoid){
    const factsCard = document.createElement("div");
    factsCard.id = `fact-card-${factoid.id}`;
    factsCard.className = "facts-cards";
    const factsTitle = document.createElement("h3");
    factsTitle.textContent = `${factoid.title}`;
    const factsContent = document.createElement("p");
    factsContent.textContent = `${factoid.fact}`;     
    const factsButton = document.createElement("button");
    factsButton.id = `fact-button-${factoid.id}`;
    factsButton.className = "facts-button";
    factsButton.textContent = "Read Next Fact";
    const br = document.createElement("br");
    factsContainer.append(factsCard);
    factsCard.append(factsTitle, factsContent);
    factsCard.appendChild(br);
    factsCard.append(factsButton);

    factsButton.addEventListener("click", () => {
        nextFact();
    })
}

function loadFact() {
    fetch(BASE_URL + '/TheFacts/1')
    .then(response => response.json())
    .then(data => renderFacts(data));
};

function nextFact() {
    fetch(BASE_URL + '/TheFacts')
    .then(response => response.json())
    .then(data => {
        let facts = data.slice(1);
        console.log(facts)
    });
};

// var buttons = document.getElementsByTagName('button');
// for (let i = 0; i < buttons.length; i++) {
    // let button = buttons[i];
    // let type = button.getAttribute('type') || 'submit'; // Submit is the default
    
    // const input = document.getElementById('input');
// input.addEventListener('click', function() {
//   alert('I was clicked!');


    

function initiateFactsApp() {
    loadFact();
    //handleClick();
};

initiateFactsApp();////END 0F CODE!!!


    

            
                
                    