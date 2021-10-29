// functon to add box-shadow on navbar after scroll
window.addEventListener("scroll", function () {
    var header = document.querySelector(".nav-bar");
    header.classList.toggle("shadow-nav", window.scrollY > 0)
})


// function to make slider working 
const track = document.querySelector('.carousel-item');
const slides = Array.from(track.children);
const prevBtn = document.querySelector('.carousel-btn-left');
const nextBtn = document.querySelector('.carousel-btn-right');
const dotsNav = document.querySelector('.carousel-nav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

// arrange the slides next to another
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};
slides.forEach(setSlidePosition);

// function to move slide
const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
};

// function to update dot 
const updateDot = (currentDot, targetDot) => {
    currentDot.classList.remove('current-indicator');
    targetDot.classList.add('current-indicator');
};

// function to hide and show arrow 
const hideShowArrow = (slides, prevBtn, nextBtn, targetIndex) => {
    if (targetIndex === 0) {
        prevBtn.classList.add('is-hidden');
        nextBtn.classList.remove('is-hidden');
    } else if (targetIndex === slides.length - 1) {
        prevBtn.classList.remove('is-hidden');
        nextBtn.classList.add('is-hidden');
    } else {
        prevBtn.classList.remove('is-hidden');
        nextBtn.classList.remove('is-hidden');
    }
};

// When i click left, slides move to the left
prevBtn.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector('.current-indicator');
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);

    moveToSlide(track, currentSlide, prevSlide);
    updateDot(currentDot, prevDot);
    hideShowArrow(slides, prevBtn, nextBtn, prevIndex);
});


// When i click right, slides move to the right
nextBtn.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.current-indicator');
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);
    
    moveToSlide(track, currentSlide, nextSlide); 
    updateDot(currentDot, nextDot);
    hideShowArrow(slides, prevBtn, nextBtn, nextIndex);
});


// when i clicked the nav dots , move to that slide
dotsNav.addEventListener('click', e => {
    const targetDot = e.target.closest('button');

    if (!targetDot) return;

    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-indicator');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);
    updateDot(currentDot, targetDot);
    hideShowArrow(slides, prevBtn, nextBtn, targetIndex);
    
});

// Function for responsive nav
const navSlide = () => {
    const hamburger = document.querySelector('.ham-burger');
    const nav = document.querySelector('.hamburger-nav');

    hamburger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // HamBurger Animation
        hamburger.classList.toggle('toggle');
    });
}

// Function call
navSlide();