const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  const card = document.createElement('div')
  const title = document.createElement('div')
  const name = document.createElement('div')
  const imageContainer = document.createElement('div')
  const img = document.createElement('img')
  const authorName = document.createElement('span')

  card.classList.add("card")
  title.classList.add("headline")
  name.classList.add("author")
  imageContainer.classList.add("img-container")

  card.appendChild(title)
  card.appendChild(name)
  name.appendChild(imageContainer)
  imageContainer.appendChild(img)
  name.appendChild(authorName)

  title.textContent = article.headline;
  authorName.textContent = article.authorName;
  img.setAttribute('src',`${article.authorPhoto}`);

  card.addEventListener('click', () => console.log(title))
  return card
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  const enteryPoint = document.querySelector(selector)

 



}

export { Card, cardAppender }
