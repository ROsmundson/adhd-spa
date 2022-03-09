const BASE_URL = 'http://localhost:3000';
const factsContainer = document.getElementById('fact-container');
console.log(factsContainer);




document.addEventListener('DOMContentLoaded', () => {
    console.log("Page has loaded");
});

//construct facts cards and append using randome
function renderFacts(factoid){
    const adhdCards = document.createElement("div");
    const h2 = document.createElement("h2");
    const factsDiv = document.createElement("div");
    
    const factCardUl= document.createElement("ul");
    const factContentLi = document.createElement("li");
    const nextRandomeBttn = document.createElement("button")
    
    factsContainer.id = "container";
    factsContainer.class = "shadowbox";
    adhdCards.id = `fact-${factoid.id}`;
    adhdCards.className = "shadowbox";
    h2.id = "fact-header";
    h2.textContent = "Did you know?";
    factsDiv.id = "facts-div";
    factCardUl.className = "random-fact";
    factCardUl.textContent = factoid.title;
    factContentLi.className = "facts-list";
    factContentLi.textContent = factoid.fact;
    factContentLi.fact = factoid.fact;
    nextRandomeBttn.id = "nextBttn";
    nextRandomeBttn.className = "randomeBttn";
    nextRandomeBttn.textContent = "Next Randome Fact";
    
    factsContainer.appendChild(adhdCards);
    factsDiv.append()
    adhdCards.append(h2, factsDiv, factCardUl, factContentLi, nextRandomeBttn)


    // // const webSourcesDiv = document.createElement("div");
    
    // factTitle.textContent = factoid.title;
    // factContent.textContent = factoid.fact;
    // factURL.className = "sources"
    // factURL.href = factoid.website;
    // webSourcesDiv.id = "source";
    // webSourcesDiv.class = "sources";

   

    // factCard.append(factTitle, factContent, factURL);
    // factCard.append(nextRandomeBttn);
}

function fetchTheFacts() {
    fetch(BASE_URL + '/TheFacts')
    .then(response => response.json())
    .then(data => data.forEach(renderFacts));
    };

function initiateTheFacts() {
    fetchTheFacts();
}


initiateTheFacts()