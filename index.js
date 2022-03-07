const BASE_URL = 'http://localhost:3000'
document.addEventListener('DOMContentLoaded', () => {
    console.log("Page has loaded");
});


function buildTheFacts(factoid){
    const factsContainer = document.getElementById('adhd-facts-container');
    const factCard = document.createElement("div");
    const factTitle = document.createElement("h3");
    const factContent = document.createElement("p");
    const nextBttn = document.createElement("button");
   
    factCard.id = `fact-${factoid.id}`
    factCard.className = "fact-card";
    factTitle.textContent = factoid.title;
    factContent.textContent = factoid.fact;
    factURL.href = factoid.website;

    nextBttn.className = "next";
    nextBttn.textContent = "Next Random Fact"
    nextBttn.addEventListener("click", () => renderNextFact)

    factsContainer.append(factCard);
    factCard.append(factTitle, factContent, factURL)
    factCard.append(factContent);
    factCard.append(factURL);

    factCard.append(factURL);
    factsContainer.appendChild(nextBttn);
}

function renderTheFact() {
    fetch(BASE_URL + '/justTheFacts')
    .then(response => response.json())
    .then(justTheFacts => justTheFacts.forEach(buildTheFacts))
    }
//rethink names of renderTheFacts and buildTheFact
function initiateFacts() {
    renderTheFact()
}


initiateFacts()



// const ul = document.createElement("ul");
// ul.id = "fact-list";
// ul.innerHTML += `<li><a href="#" data-id = ${factoid.id}">${factoid.title}</a></li>`
// factCard.append(ul)


const factURL = document.createElement("a")
const linkText = document.createTextNode("More Information From the Source")
factURL.appendChild(linkText);