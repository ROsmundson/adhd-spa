//Page load notification
document.addEventListener('DOMContentLoaded', () => {
    console.log("Page has loaded");
});

const BASE_URL = 'http://localhost:3000';
const factsContainer = document.getElementById("facts-container");
const welcome = document.getElementById("welcome")
const factsButton = document.getElementsByClassName('facts-buttons')
const button = document.createElement('button');

function fetchFacts() {  
    fetch(BASE_URL + '/TheFacts')
    .then(response => response.json())
    .then(facts => {
        facts.forEach(fact => createFactsCards(fact));
    })
    }

function createFactsCards(factoid){
    const factsCard = document.createElement("div");
    factsCard.id = `fact-card-${factoid.id}`;
    factsCard.className = "facts-cards";
    const factsTitle = document.createElement("h3");
    factsTitle.textContent = `${factoid.title}`;
    const factsContent = document.createElement("p");
    const factsButton = document.createElement("button")
    factsButton.id = `button-${factoid.id}`;
    factsButton.className = "facts-buttons"
    factsButton.textContent = "Read Next Fact";
    factsContent.textContent = `${factoid.fact}`;  
    factsContainer.append(factsCard);
    factsCard.append(factsTitle, factsContent);
    factsCard.append(factsButton)
    //factsCard.style.display = 'none'
    changeCards();
};

function changeCards() {
    welcome.append(button)
    button.textContent = "Read the Facts"
    let cards = document.getElementsByClassName('facts-cards');
    
    let fact1 = document.getElementById("fact-card-1")
    // let fact2= document.getElementById("fact-card-2")
    // let fact3= document.getElementById("fact-card-3")
    // let fact4= document.getElementById("fact-card-4")
    // let fact5= document.getElementById("fact-card-5")
    // let fact6= document.getElementById("fact-card-6")
    // let fact7= document.getElementById("fact-card-7")
    // let fact8= document.getElementById("fact-card-8")
    // let fact9= document.getElementById("fact-card-9")
    // let fact10= document.getElementById("fact-card-10")
    button.addEventListener('click', () => {
        welcome.remove();
        fact1.style.display = 'block'

        
        console.log(cards)





       

    })
}








function navHome() {
    const homeButton = document.getElementById("home");
    homeButton.addEventListener('click', () => {
        console.log('home button clicked')
    });
};

function navAbout() {
    const aboutButton = document.getElementById("about");
    aboutButton.addEventListener('click', () => {
        console.log('about button clicked')
    });
};
//end of code. ititiateFactsApp() up top.


function initiateFactsApp() {
    fetchFacts();
    navHome();
    navAbout();
    
}

initiateFactsApp();////END 0F CODE!!!                   