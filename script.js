const review = document.getElementById("review");
review.addEventListener("mouseenter", function(){
        review.innerHTML = 'Review4You  <i class="bi bi-arrow-up-right-circle"></i>'
})
review.addEventListener("mouseleave", function(){
        review.innerHTML = 'Review4You <i class="bi bi-arrow-right-circle"></i>'
})

const navbarBrand = document.getElementsByClassName("navbar-brand")[0];
const navLogo = document.getElementsByClassName("nav-logo")[0]
navbarBrand.addEventListener("mouseenter", function(){
    navLogo.classList.add("active")
})
navbarBrand.addEventListener("mouseleave", function(){
    navLogo.classList.remove("active")
})

// Scroll

let lastScrollTop = 0; 
const nav = document.getElementById('nav'); 
window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop; // Current scroll position

    if (scrollTop < lastScrollTop) {
        // Scrolling up
        nav.classList.add('visible');
    } else {
        // Scrolling down
        nav.classList.remove('visible');
    }

    lastScrollTop = scrollTop; // Update last scroll position
});

window.onscroll = function () {
    if(pageYOffset === 0) {
        nav.classList.remove('visible');
    }
}