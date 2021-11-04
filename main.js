///////////////////////////////// MOBILE NAV BAR

const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

function toggleNav() {
    burger.classList.toggle('fa-bars');
    burger.classList.toggle('fa-times');
    nav.classList.toggle('nav-active');
}

burger.addEventListener('click', function () {
    toggleNav();
});

///////////////////////////////// LANDING CAROUSEL

let slideIndex = 0;
const slides = [...document.getElementsByClassName("mySlides")];

const showSlides= () => {
    
    slides.forEach(slide => slide.style.display = "none");
    
    slideIndex++;
    
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000);
}

showSlides();

///////////////////////////////// SCROLL DOWN ARROW

let downArrow = document.querySelector('.scrollDownArrow');
let investmentSection = document.querySelector('.investmentSection');

downArrow.addEventListener('click', () => investmentSection.scrollIntoView({ 
  behavior: 'smooth' 
}));


