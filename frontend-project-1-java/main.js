const menuEmail = document.querySelector('.navbar-email');
const desktopM = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
    desktopM.classList.toggle('inactive'); /*con classlist accedemos a las clases que tiene, con toggle 
    logramos que active o desactive inactive*/
}