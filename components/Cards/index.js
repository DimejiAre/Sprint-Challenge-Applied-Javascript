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

function Card(data){
    const [cardDiv, headDiv, authorDiv, imgDiv, img, span,] = ['div', 'div', 'div','div','img','span']
        .map(element => document.createElement(element));
    
    cardDiv.classList.add('card');
    headDiv.classList.add('headliine');
    authorDiv.classList.add('author');
    imgDiv.classList.add('img-container');

    headDiv.textContent = data.headline
    img.src = data.authorPhoto;
    span.textContent = `By ${data.authorName}`;

    imgDiv.appendChild(img);

    authorDiv.appendChild(imgDiv);
    authorDiv.appendChild(span);

    cardDiv.appendChild(headDiv);
    cardDiv.appendChild(authorDiv);

    return cardDiv;
}

function addCards(){
    const htmlCards = document.querySelector('.cards-container');

    axios.get('https://lambda-times-backend.herokuapp.com/articles')
        .then(response => {
            let data = response.data.articles;
            for (let key in data){
                data[key].map(element => {
                    htmlCards.appendChild(Card(element));
                })
            }
        })
        .catch(err => {
            console.log(err);
        })
}

addCards()