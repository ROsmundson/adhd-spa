//Page load notification
document.addEventListener('DOMContentLoaded', () => {
    console.log("Page has loaded");
});

function initiateFactsApp() {

    function navHome() {
        homeButton.addEventListener('click', () => {
            console.log('home button clicked')
        });
    };

    function navAbout() {
        aboutButton.addEventListener('click', () => {
            console.log('about button clicked')
        });
    };

    const BASE_URL = 'http://localhost:3000';
    const homeButton = document.getElementById("home");
    const aboutButton = document.getElementById("about");
    const factsContainer = document.getElementById("facts-container");
    const welcomeCard = document.createElement("h3");
    const factsCards = document.createElement("div");
    const factsTitle = document.createElement("h3");
    const factsContent = document.createElement("p");
    const button = document.createElement("button");

    function createFactsCards(fact){
        welcomeCard.id = "fact-card-0";
        welcomeCard.className = "facts-cards";
        welcomeCard.innerHTML = "<div>It's fair to say that ADHD is a hard disorder to understand. Most people know the basics, but there is a lot more going on behind the scenes than most realize. Here are 10 facts you may or may not have known about ADHD!";
        factsCards.id = `fact-card-${fact.id}`;
        factsCards.className = "facts-cards";
        factsTitle.textContent = `${fact.title}`;
        factsContent.textContent = `${fact.fact}`;
        button.id = "button"
        button.class = "cards-buttons"
        button.textContent = "Read the Facts!"
   
        let welcome = welcomeCard
        factsContainer.append(welcome)
        factsContainer.appendChild(button)

        button.addEventListener('click', () => {
            let thisCard = welcome;
            console.log(thisCard);
            
            let thatCard = factsCards;
            thatCard.append(fact)
            console.log(thatCard)


        })
    }

    function fetchFacts() {  
        fetch(BASE_URL + '/TheFacts')
        .then(response => response.json())
        .then(facts => {
            createFactsCards(facts)
        })
    }
    
    

    function buttonEvent(){}

    function hideCard(){}

 
//end of code. ititiateFactsApp() up top.
    fetchFacts();
    navHome();
    navAbout();

}

initiateFactsApp();////END 0F CODE!!!                   