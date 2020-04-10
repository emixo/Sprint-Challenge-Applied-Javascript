// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.
axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then(result => {
        const articles = result.data.articles
        const jsArticles = articles.javascript
        const bootstrapArticles = articles.bootstrap
        const techArticles = articles.technology
        const jqueryArticles = articles.jquery
        const nodeArticles = articles.node

        jsArticles.forEach(article => {
            cardsContainer.appendChild(createCard(article))
        })
        bootstrapArticles.forEach(article => {
            cardsContainer.appendChild(createCard(article))
        })
        techArticles.forEach(article => {
            cardsContainer.appendChild(createCard(article))
        })
        jqueryArticles.forEach(article => {
            cardsContainer.appendChild(createCard(article))
        })
        nodeArticles.forEach(article => {
            cardsContainer.appendChild(createCard(article))
        })

    })

const createCard = (object) => {
    const card = document.createElement("div")
    const headline = document.createElement("div")
    const author = document.createElement("div")
    const imageContainer = document.createElement("div")
    const authorImage = document.createElement("img")
    const authorName = document.createElement("span")

    card.appendChild(headline)
    card.appendChild(author)
    author.appendChild(imageContainer)
    imageContainer.appendChild(authorImage)
    author.appendChild(authorName)


    card.classList.add("card")
    headline.classList.add("headline")
    author.classList.add("author")
    imageContainer.classList.add("img-container")
    authorImage.src = object.authorPhoto

    headline.textContent = object.headline
    authorName.textContent= `By ${object.authorName}`

    return card
}



const cardsContainer = document.querySelector(".cards-container")
