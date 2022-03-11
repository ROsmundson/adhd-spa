//Node grabbers
const BASE_URL = 'http://localhost:3000';
const homeNav = document.getElementById("home")
const awayNav = document.getElementById("about-me")
const factsContainer = document.getElementById("facts-container")
const userStoryContainer = document.getElementById("")
const nextButton = document.createElement("button")
//Page load notification
document.addEventListener('DOMContentLoaded', () => {
    console.log("Page has loaded");
});

//construct and prepare nodes to be rendered upon fetch
function renderFacts(factoid){
    const factsCard = document.createElement("div");
    factsCard.id = "facts-card-title"
    factsCard.innerHTML = `<h3>${factoid.title}</h3>`;
    const factsContent = document.createElement("p");
    factsContent.textContent = `${factoid.fact}`;
    
    const p = document.createElement('p');
    nextButton.innerText = "Read Next Fact";
    p.textContent = `${factoid}`;
    
    factsContainer.appendChild(factsCard);
    factsCard.append(factsContent);
    factsCard.append(nextButton);
}
    //===============================================================
    
function fetchTheFacts() {
    fetch(BASE_URL + '/TheFacts')
    .then(response => response.json())
    .then(data => {
        let fact = data
        if(fact[0].id === 1){
            renderFacts(fact[0]);
        }
        //on click move to next fact readNextFact()
    })
    .catch(error => console.error('Error:', error));

    console.log(nextButton);
    nextButton.addEventListener('click', () => {
        console.log('i was clicked');
        console.log(event);
    });

}

function switchFacts(event){

}

function initiateTheFacts() {
    fetchTheFacts();
}

initiateTheFacts()






function renderUserStory() {console.log("returned fact")}





//2. possible functions for grabbing/displaying/then delete on next fact click

////3. function to grab next fact and display/ then delete on next fact click

//This all the way through. Reminder =+ home and away will need to be handled 

//Stretch goal - ability to return to fact and continue iterating??? handle returning to page where left off???


