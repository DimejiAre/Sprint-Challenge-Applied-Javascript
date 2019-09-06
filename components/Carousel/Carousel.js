/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

let slideIndex = 1;

function Carousel(){
  const [carouselDiv, lbuttonDiv, rbuttonDiv] = ['div', 'div', 'div']
    .map(element => document.createElement(element));
  
  const [img1, img2, img3, img4] = ['img', 'img', 'img', 'img']
    .map(element => document.createElement(element));
  
  carouselDiv.classList.add('carousel');
  lbuttonDiv.classList.add('left-button');
  rbuttonDiv.classList.add('right-button');

  img1.src = '../../assets/carousel/mountains.jpeg';
  img2.src = '../../assets/carousel/computer.jpeg';
  img3.src = '../../assets/carousel/trees.jpeg';
  img4.src = '../../assets/carousel/turntable.jpeg';

  [lbuttonDiv, img1, img2, img3, img4, rbuttonDiv]
    .forEach(element => carouselDiv.appendChild(element));

  console.log(carouselDiv)

  return carouselDiv;
}

const htmlCarousel = document.querySelector('.carousel-container');

htmlCarousel.appendChild(Carousel());

const rbuttonDiv = document.querySelector('.right-button');

rbuttonDiv.addEventListener('click', ()=>{
  showSlides(slideIndex += 1);
})

const lbuttonDiv = document.querySelector('.left-button');

lbuttonDiv.addEventListener('click', ()=>{
  showSlides(slideIndex -= 1);
})

// let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides (n){
  debugger

  let slides = document.querySelectorAll(".carousel img")

  if (n > slides.length) {
    slideIndex = 1
  } 
  if (n < 1) {
    slideIndex = slides.length
  }
  for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }

  slides[slideIndex-1].style.display = "block";
}
