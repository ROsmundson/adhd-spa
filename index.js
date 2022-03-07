const BASE_URL = 'http://localhost:3000'
document.addEventListener('DOMContentLoaded', () => {
    console.log("Page has loaded");
});


function buildTheFacts(factoid){
    const factsContainer = document.getElementById('adhd-facts-container');
    const factCard = document.createElement("div");
    const factTitle = document.createElement("h3");
    const factContent = document.createElement("p");
    const factURL = document.createElement("a")
    const linkText = document.createTextNode("More Information From the Source")
    const previousBttn = document.createElement("button");
    const nextBttn = document.createElement("button");

    factCard.id = `fact-${factoid.id}`
    factCard.className = "fact-card";
    factTitle.textContent = factoid.title;
    factContent.textContent = factoid.fact;
    factURL.href = factoid.website;
    
    previousBttn.className = "previous";
    previousBttn.textContent = "Previous Fact";
    previousBttn.addEventListener("click", () => renderNextFact)
    nextBttn.className = "next";
    nextBttn.textContent = "Next Fact"
    nextBttn.addEventListener("click", () => renderNextFact)

    factsContainer.append(factCard);
    factCard.append(factTitle, factContent, factURL)
    // factCard.append(factContent);
    // factCard.append(factURL);
    factURL.appendChild(linkText);
    factCard.append(factURL);
    factsContainer.appendChild(previousBttn);
    factsContainer.appendChild(nextBttn);
}

function renderTheFact() {
    fetch(BASE_URL + '/justTheFacts')
    .then(response => response.json())
    .then(justTheFacts => justTheFacts.forEach(fact => {
        let i = 0; i > justTheFacts.length; i++;
            console.log(fact);
}

function renderNextFact(button){
    
}

function initiateFacts() {
    appendTheFacts()
}


initiateFacts()