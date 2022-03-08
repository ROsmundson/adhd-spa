const BASE_URL = 'http://localhost:3000'
document.addEventListener('DOMContentLoaded', () => {
    console.log("Page has loaded");
});

function renderTheFacts(factoid){
    const factsContainer = document.getElementById('adhd-facts-container');
    const factCard = document.createElement("div");
    const factTitle = document.createElement("h3");
    const factContent = document.createElement("p");
    const factURL = document.createElement("a"); 
    const nextBttn = document.createElement("button");
    // const webSourcesDiv = document.createElement("div");
    
    factCard.id = `fact-${factoid.id}`
    factCard.className = "fact-card";
    factTitle.textContent = factoid.title;
    factContent.textContent = factoid.fact;
    factURL.className = "sources"
    factURL.href = factoid.website;
    nextBttn.id = "next"
    nextBttn.className = "bttn";
    nextBttn.innerText = "Next Randome Fact";
    
    // webSourcesDiv.id = "source";
    // webSourcesDiv.class = "sources";



    

    factsContainer.append(factCard);
    factCard.append(factTitle, factContent, factURL, nextBttn);
}

function fetchTheFacts() {
    fetch(BASE_URL + '/justTheFacts')
    .then(response => response.json())
    .then(data => data.forEach(renderTheFacts));
}

function initiateTheFacts() {
    fetchTheFacts();
}


initiateTheFacts()