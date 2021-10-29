// functon to add box-shadow on navbar after scroll
window.addEventListener("scroll", function () {
    var header = document.querySelector(".nav-bar");
    header.classList.toggle("shadow-nav", window.scrollY > 0)
})

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



// secondary nav styling
function openNav() {
    document.querySelector(".secondary-nav").style.height = "100%";
    document.querySelector(".open-nav").style.display= "none";
    document.querySelector(".close-nav").style.display= "block";
  }
  
  function closeNav() {
    document.querySelector(".secondary-nav").style.height = "60px";
    document.querySelector(".open-nav").style.display= "block";
    document.querySelector(".close-nav").style.display= "none";
  }