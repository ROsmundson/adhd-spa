//Page load notification
document.addEventListener('DOMContentLoaded', () => {
    console.log("Page has loaded");
});

const BASE_URL = 'http://localhost:3000';
const welcome = document.getElementById("welcome-card");
const welcomeButton = document.createElement('button');
const factsContainer = document.getElementById("facts-container");
const cardButton = document.getElementsByClassName("cards-button")


function createFactsCards(facts) {
    welcomeButton.id = "welcome-button";
    welcomeButton.className = "cards-button";
    welcomeButton.textContent = "Read the Facts"
    const factsCards = document.createElement("div");
    factsCards.id = `facts-card-${facts.id}`;
    factsCards.className = "facts-cards";
    const factsTitle = document.createElement("h3");
    factsTitle.textContent = `${facts.title}`;
    const factsContent = document.createElement("p");
    factsContent.textContent = `${facts.fact}`;
    const cardsButton = document.createElement('button')
    cardsButton.className = 'cards-button';
    cardsButton.id = `${facts.id}`
    cardsButton.textContent = "Read Next Fact"
    const lineBreak = document.createElement("br");
    welcome.append(welcomeButton);
    factsContainer.append(factsCards);
    factsCards.append(factsTitle,factsContent);
    factsCards.append(lineBreak);
    factsCards.append(cardsButton);
    let notHelpful = document.getElementById('10')
    //factsCards.style.display = "none"
    console.log(factsCards)
}

function fetchFacts() {  
    fetch(BASE_URL + '/TheFacts')
    .then(response => response.json())
    .then(facts => {
        facts.forEach(fact => createFactsCards(fact));
        doStuff(facts);
    })
}


function doStuff(facts) {
    let cards = facts
    let buttons = [...cardButton]
    welcomeButton.addEventListener('click', () => {
        welcome.remove();
        let card = document.querySelector(".facts-cards");
        card.style.display = 'block';
            
                buttons.forEach(button => {
                        console.log(button.id)
                        button.addEventListener('click', () => {
                            for(let i = 0; i < cards.length; i++) {
                                
                            }

                            card.remove();
                            card = document.querySelector(".facts-cards");
                            card.remove()
                            // card.innerHTML = "<h1>That's all folks! Thank you for checking out the app!</h1>"
                        })
                    })
                })
            }
                            
            // for (const user of users) {  
            //     if (user.id === 2) {
            //       break            // exits the loop early
            //     }               
          


            // for( let i = 0; i < cards.length; i++) {
            // let card = cards[i];
            //     console.log(button);
            //     console.log(card);
            // }

    
    

//         let buttons = document.querySelectorAll('.cards-button')
//         buttons.addEventListener('click', () => {
//             console.log(buttons)
//         })
// }

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