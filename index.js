document.addEventListener('DOMContentLoaded', () => {
    console.log("Page has loaded");
});

const BASE_URL = 'http://localhost:3000';
const homePage = document.getElementById("facts-page");
const aboutPage = document.getElementById("about-page");
const welcome = document.getElementById("welcome");
const welcomeButton = document.createElement('button');
const factsSection = document.getElementById("facts-container");
const commentsForm = document.querySelector("#comment-form")

function createFactsCards(facts) {
    welcomeButton.id = "welcome-button";
    welcomeButton.className = "cards-button";
    welcomeButton.textContent = "Read the Facts"
    const factsCards = document.createElement("div");
    factsCards.id = `facts-card-${facts.id}`;
    factsCards.className = "facts-cards";
    const br = document.createElement("br")
    const factsImage = document.createElement('img')
    factsImage.src = facts.image;
    factsImage.id = `image-${facts.id}`
    factsImage.className = "images";
    const factsTitle = document.createElement("h1");
    factsTitle.textContent = facts.title;
    const factsContent = document.createElement("h3");
    factsContent.textContent = facts.fact;
    welcome.append(welcomeButton);
    factsSection.append(factsCards);
    factsCards.append( factsTitle,factsImage, factsContent, br, br);
    factsSection.style.display = "none";
}

function fetchFacts() {  
    fetch(BASE_URL + '/TheFacts')
    .then(response => response.json())
    .then(facts => {
        facts.forEach(fact => createFactsCards(fact));
        factsOn(facts);
    })
    .catch(error => console.log(error));
}

function factsOn() {
    
    welcomeButton.addEventListener("click", () => {
        welcome.style.display = "none";
        factsSection.style.display = "block";
        let title = document.querySelector("#title");
        title.textContent = "Did You Know";
    })
}

function navHome() {
    const homeButton = document.getElementById("home");
    homeButton.addEventListener('click', () => {
        homePage.style.display = "none" ? homePage.style.display = "block" : homePage.style.display = "block";
        factsSection.style.display = "block" ? factsSection.style.display = "none" : factsSection.style.display = "none";
        aboutPage.style.display = "block" ? aboutPage.style.display = "none" : aboutPage.style.display = "none";
        welcome.style.display = "none" ? welcome.style.display = "block" : welcome.style.display = "block";
        
    });
};

function navAbout() {
    const aboutButton = document.getElementById("about");
    aboutButton.addEventListener('click', () => {
        aboutPage.style.display = "none" ? aboutPage.style.display = "block" : aboutPage.style.display = "block";
        factsSection.style.display = "block" ? factsSection.style.display = "none" : factsSection.style.display = "none";
        homePage.style.display = "block" ? homePage.style.display = "none" : homePage.style.display = "none";
        title.textContent = ""
    });
};

function fetchComments() {
    fetch(BASE_URL + '/comments/')
    .then(response => response.json())
    .then(comments => {
        comments.forEach(createCommentNods);
    })
    .catch(error => console.log(error, "there's something wrong"))
};

function createCommentNods(comments) {
    const commentsContainer = document.getElementById("comments-container")
    const commentCard = document.createElement('div');
    const commentTitle = document.createElement("h3");
    commentCard.id = `{comment-${comments.id}`;
    commentCard.className = "comment-cards";
    commentTitle.textContent = comments.title;
    const commentContent = comments.content
    commentsContainer.append(commentCard)
    commentCard.append(commentTitle, commentContent);
}

function postComments(event) {
    event.preventDefault();
    let userName = document.querySelector("#user").value;
    let comment = document.querySelector("#content").value;
    let commentObj = {name: userName, content: comment}
    fetch(BASE_URL + '/comments/', {
            method: 'POST',
            headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(commentObj),
            })
            .then(response => response.json())
            .then(comments => forEach(commentsOn(comments)))
            .catch(error => console.log(error));
            commentsForm.reset();
    
}

function commentsOn() {
    commentsForm.addEventListener("submit", postComments)
        
        
        
        

    }

             
                        




// function commentsOn() {
    //     commentsForm.addEventListener("submit", (e) => {
        //         console.log(e.target)
        //         fetchUserComments();
        //     })
        //     };
        
                            
                            
                            
                            
                            
                            //end of code. ititiateFactsApp() up top.
                            
                            
                            
function initiateFactsApp() {
    fetchFacts();
    fetchComments();
    navHome();
    navAbout();
                                
                            }
                            
                            initiateFactsApp();////END 0F CODE!!!    