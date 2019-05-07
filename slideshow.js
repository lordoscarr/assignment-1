let slideIndex = 1;
let timer;
let playing = false;

document.addEventListener('DOMContentLoaded', (event) => {
    showSlides(slideIndex);
    timer = setInterval(plusSlides, 3000);
    playing = true;
});

function pauseSlide(){
    let pausebtn = document.querySelector('.pause-button');
    if(playing){
        clearInterval(timer);
        pausebtn.setAttribute('src', 'img/play.svg');
        playing = false;
    }else{
        timer = setInterval(plusSlides, 3000);
        pausebtn.setAttribute('src', 'img/pause.png');
        playing = true;
    }

}

// Next/previous controls
function plusSlides() {
  showSlides(slideIndex += 1);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName('slide-item');
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].classList.remove('active');
  }
  let currentslide = slides[slideIndex-1];
  currentslide.classList.add('active');
  currentslide.querySelector('.slide-number').innerHTML = slideIndex+' / '+slides.length;
}