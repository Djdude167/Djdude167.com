const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    //toggle navbar
    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');

    //Animate Links
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = ''
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.3}s`;
        }

    });
    
    //Burger Change
    burger.classList.toggle('toggle');

    });

    
} 
/*
const aboutSlide = aboutSlide() => {
    const aboutOpen = document.querySelectorAll('#about-page-container p');

    //Animate About Page
    aboutOpen.forEach((link, index) => {
            link.style.animation = `about-page-blur 0.5s ease forwards ${index / 5 + 0.3}s`;
});
}
*/

navSlide();