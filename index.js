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

//construct and prepare nodes to be dynamically rendered upon fetch

//var sliders = [].slice.call(document.getElementsByClassName("sliderControlLi"));
// sliders.forEach(function (element, index){
    // element.addEventListener("click", function(){
        // console.log("you clicked slider controler " +index + "!")
        
function loadFacts() {
    fetch(BASE_URL + '/TheFacts')
    .then(response => response.json())
    .then(data => {
        data.forEach(renderFacts);
    })
};
        
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
    //factsButton.style.cssFloat = "right";
    factsContainer.append(factsCard);
    factsCard.append(factsTitle, factsContent);
    factsCard.appendChild(br);
    factsCard.append(factsButton);
}


function initiateFactsApp() {
    loadFacts();
};

initiateFactsApp();
