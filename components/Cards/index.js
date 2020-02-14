// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function createComp(obj) {

    const card = document.createElement('div'),
    headline = document.createElement('div'),
    author = document.createElement('div'),
    imgContainer = document.createElement('div'),
    authorImg = document.createElement('img'),
    authorsName = document.createElement('span');

    card.append(headline, author); 
    author.append(imgContainer, authorsName);
    imgContainer.append(authorImg);

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    headline.textContent = obj.headline;
    authorImg.src = obj.authorPhoto;
    authorsName.textContent = obj.authorName;

    return card;
}
    const cards = document.querySelector('.cards-container');
    axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response => {
        // console.log(response)
        response.data.articles.javascript.map(obj => {
            cards.appendChild(createComp(obj))
        })
    })
    .catch(error => {
        console.log(error)
    });

    axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response => {
        // console.log(response)
        response.data.articles.bootstrap.map(obj => {
            cards.appendChild(createComp(obj))
        })
    })
    .catch(error => {
        console.log(error)
    });

    axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response => {
        // console.log(response)
        response.data.articles.technology.map(obj => {
            cards.appendChild(createComp(obj))
        })
    })
    .catch(error => {
        console.log(error)
    });

    axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response => {
        // console.log(response)
        response.data.articles.jquery.map(obj => {
            cards.appendChild(createComp(obj))
        })
    })
    .catch(error => {
        console.log(error)
    });

    axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response => {
        // console.log(response)
        response.data.articles.node.map(obj => {
            cards.appendChild(createComp(obj))
        })
    })
    .catch(error => {
        console.log(error)
    });