function initiateFactsApp() {
    //
    document.addEventListener('DOMContentLoaded', () => {
        console.log("Page has loaded");
    });

    function navHome() {
        const homeButton = document.getElementById("home");
        homeButton.addEventListener('click', () => {
            homePage.style.display = "none" ? homePage.style.display = "block" : homePage.style.display = "block";
            factsSection.style.display = "block" ? factsSection.style.display = "none" : factsSection.style.display = "none";
            aboutPage.style.display = "block" ? aboutPage.style.display = "none" : aboutPage.style.display = "none";
            homePageWelcome.style.display = "none" ? homePageWelcome.style.display = "block" : homePageWelcome.style.display = "block";
        });
    };

    function navAbout() {
        const aboutButton = document.getElementById("about");
        aboutButton.addEventListener('click', () => {
            aboutPage.style.display = "none" ? aboutPage.style.display = "block" : aboutPage.style.display = "block";
            factsSection.style.display = "block" ? factsSection.style.display = "none" : factsSection.style.display = "none";
            homePage.style.display = "block" ? homePage.style.display = "none" : homePage.style.display = "none";
            title.textContent = "";
        });
    };

    const BASE_URL = 'http://localhost:3000';
    const homePage = document.getElementById("facts-page");
    const aboutPage = document.getElementById("about-page");
    const homePageWelcome = document.getElementById("welcome");
    const factsSection = document.getElementById("facts-container");
    const commentsForm = document.querySelector("#comment-form")


    const welcomeButton = document.createElement('button');
    const br = document.createElement("br");
    const hr = document.createElement("hr");

    function buildAndAppendFactsCards(facts) {
        const factsCards = document.createElement("div");
        const factsImage = document.createElement('img')
        const factsTitle = document.createElement("h1");
        const factsContent = document.createElement("h3");
        welcomeButton.id = "welcome-button";
        welcomeButton.className = "cards-button";
        welcomeButton.textContent = "Read the Facts"
        factsCards.id = `facts-card-${facts.id}`;
        factsCards.className = "facts-cards";
        factsImage.src = facts.image;
        factsImage.id = `image-${facts.id}`
        factsImage.className = "images";
        factsTitle.textContent = facts.title;
        factsContent.textContent = facts.fact;
        homePageWelcome.append(welcomeButton);
        factsSection.append(factsCards);
        factsCards.append( factsTitle,factsImage, factsContent, br, br);
        factsSection.style.display = "none";
    }

    function getFacts() {  
        fetch(BASE_URL + '/TheFacts')
        .then(response => response.json())
        .then(facts => {
            facts.forEach(fact => buildAndAppendFactsCards(fact));
            makeFacts(facts);
        })
        .catch(error => console.log(error));
    }

    function makeFacts() {
        welcomeButton.addEventListener("click", () => {
            homePageWelcome.style.display = "none";
            factsSection.style.display = "block";
            let title = document.querySelector("#title");
            title.textContent = "Did You Know";
        })
    }

    function getComments() {
        fetch(BASE_URL + '/comments/')
        .then(response => response.json())
        .then(comments => {
            comments.forEach(buildCommentCards);
        })
        .catch(error => console.log(error, "there's something wrong"))
    };

    function buildCommentCards(comments) {
        const commentsContainer = document.getElementById("comments-container");
        const commentCard = document.createElement('div');
        const commentTitle = document.createElement("h3");
        const commentName = document.createElement("h4")
        const commentContent = document.createElement("p");
        commentCard.id = comments.id;
        commentCard.className = "comment-cards";
        commentTitle.id = comments.id;
        commentName.textContent =  comments.name;
        commentContent.textContent = comments.comment;
        commentsContainer.append(commentTitle, commentName, commentCard);
        commentCard.append(commentContent, hr);
    }

    function makeAndPostComments() {
        commentsForm.addEventListener("submit", (e) => {
            e.preventDefault();
                let commentName = commentsForm.querySelector("#user").value;
                let commentContent = commentsForm.querySelector("#content").value;
                let comment = {
                    name: commentName,
                    comment: commentContent,
                }

                fetch(BASE_URL + '/comments/', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(comment),
                })
                .then(response => response.json())
                .then(comments => buildCommentCards(comments)
                )
                .catch(error => console.log(error))
        })
    }

    getFacts();
    getComments();
    makeAndPostComments();
    navHome();
    navAbout();                        
}

initiateFactsApp();    