// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header() {
    const [headerDiv, dateSpan, h1, tempSpan] = ['div', 'span', 'h1', 'span']
        .map(element => document.createElement(element));
    
    headerDiv.classList.add('header');
    dateSpan.classList.add('date');
    tempSpan.classList.add('temp');

    dateSpan.textContent = 'SMARCH 28, 2019';
    h1.textContent = 'Lambda Times';
    tempSpan.textContent = '98°';

    headerDiv.appendChild(dateSpan);
    headerDiv.appendChild(h1);
    headerDiv.appendChild(tempSpan);

    return headerDiv
}

document.querySelector('.header-container').appendChild(Header())
