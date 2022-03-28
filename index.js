
    //Page load notification
document.addEventListener('DOMContentLoaded', () => {
    console.log("Page has loaded");
});

//Main Node grabbers:
const BASE_URL = 'http://localhost:3000';
const factsContainer = document.getElementById("facts-container");
const factsCard = document.getElementsByClassName("facts-cards")
//const homeNav = document.getElementById("home")
//const awayNav = document.getElementById("about-me")
//const userStoryContainer = document.getElementById("")
//----------------------------------------------------------------
function renderFacts(factoid){
    const factsCard = document.createElement("div");
    factsCard.id = `fact-card-${factoid.id}`;
    factsCard.className = "facts-cards";
    const factsTitle = document.createElement("h3");
    factsTitle.textContent = `${factoid.title}`;
    const factsContent = document.createElement("p");
    factsContent.textContent = `${factoid.fact}`;     
    const factsButton = document.getElementById("facts-button");
    factsButton.id = "facts-button"
    factsButton.className = "facts-button";
    factsButton.textContent = "Read Next Fact";
    const br = document.createElement("br");
    factsContainer.append(factsCard);
    factsCard.append(factsTitle, factsContent);
    factsCard.appendChild(br);
    factsContainer.append(factsButton);
    }

function loadFacts() {
    fetch(BASE_URL + '/TheFacts')
    .then(response => response.json())
    .then(data => {
        let welcome = document.getElementById("welcome");
        let button = document.getElementById("facts-button");
        button.addEventListener("click", () => {
            welcome.remove();
            let facts = data;
            renderFacts(facts[0])
            
            facts = facts.slice(1)
            console.log(facts)
            });
        });
};

    // for (var i = 0; i < 5; i++) {
    //     var button = document.createElement("button");
    //     button.innerText = i;
    //     (function(index){
    //       button.addEventListener("click", function() {
    //         console.log(index)
    //       })
    //     })(i)
    //     buttonsContainer.appendChild(button);
      
    //   }
    //   console.log(i);
        

function nextFact() {
    fetch(BASE_URL + '/TheFacts')
    .then(response => response.json())
    .then(data => console.log(data));
};

        //WORK ON PLACING THINGS INSIDE EVENT LISTENER

// var buttons = document.getElementsByTagName('button');
// for (let i = 0; i < buttons.length; i++) {
    // let button = buttons[i];
    // let type = button.getAttribute('type') || 'submit'; // Submit is the default
    
    // const input = document.getElementById('input');
// input.addEventListener('click', function() {
//   alert('I was clicked!');


    

function initiateFactsApp() {
    loadFacts();

    //handleClick();
}

initiateFactsApp();////END 0F CODE!!!


    

            
                
                    