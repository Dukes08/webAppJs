const menuEmail = document.querySelector('.navbar-email');
const desktopM = document.querySelector('.desktop-menu');
const hamMenuIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
    desktopM.classList.toggle('inactive'); /*con classlist accedemos a las clases que tiene, con toggle 
    logramos que active o desactive inactive*/
}

hamMenuIcon.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
}