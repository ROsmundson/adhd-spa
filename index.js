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

nextButton = document.getElementsByClassName('button')
console.log(nextButton)
nextButton.addEventListener('click', () => console.log("I was clicked"))
console.log(button)


//construct and prepare nodes to be dynamically rendered upon fetch

function fetchFacts() {
    fetch(BASE_URL + '/TheFacts')
    .then(response => response.json())
    .then(data => { 
        let facts = data
            if(`facts${[0]}` === facts[0])
            renderFacts(facts[0])
            facts = data.slice(1);
            facts.forEach(renderFacts)


            })
        }
//var sliders = [].slice.call(document.getElementsByClassName("sliderControlLi"));
// sliders.forEach(function (element, index){
// element.addEventListener("click", function(){
// console.log("you clicked slider controler " +index + "!")


function renderFacts(factoid){
    
    const factsCard = document.createElement("div");
    factsCard.id = "facts-card";
    const factsTitle = document.createElement("h3");
    factsTitle.textContent = `${factoid.title}`;
    const factsContent = document.createElement("p");
    factsContent.textContent = `${factoid.fact}`;
    let nextButton = document.createElement("button");
    nextButton.id = `${factoid.id}`;
    nextButton.className = "button"
    nextButton.innerText = "Read Next Fact";
    factsContainer.appendChild(factsCard);
    factsCard.append(factsTitle);
    factsCard.append(factsContent);
    factsCard.append(nextButton);
}

        
        
        

function initiateFactsApp() {
    fetchFacts();
};

initiateFactsApp();
