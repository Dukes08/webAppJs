const menuEmail = document.querySelector('.navbar-email');
const desktopM = document.querySelector('.desktop-menu');
const hamMenuIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarIcon = document.querySelector('.navbar-shopping-cart')
const shoppingCarAside = document.querySelector('.product-detail')

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){

    const isShoppingCarAside = shoppingCarAside.classList.contains('inactive');

    if(!isShoppingCarAside){
        shoppingCarAside.classList.add('inactive');
    }

    desktopM.classList.toggle('inactive'); /*con classlist accedemos a las clases que tiene, con toggle 
    logramos que active o desactive inactive*/
}

hamMenuIcon.addEventListener('click', toggleMobileMenu);

/*Para que no se solapen mobile menu con shopping car*/

function toggleMobileMenu(){
    const isShoppingCarAside = shoppingCarAside.classList.contains('inactive');

    if(!isShoppingCarAside){
        shoppingCarAside.classList.add('inactive');
    }

    shoppingCarAside.classList.toggle('inactive');

}

menuCarIcon.addEventListener('click', toggleShoppingCar);

/*Para que no se solapen shopping car con mobile menu*/

function toggleShoppingCar(){
    const isMobileMenuClose = mobileMenu.classList.contains('inactive');

    if(!isMobileMenuClose){
        mobileMenu.classList.add('inactive');
    }

    shoppingCarAside.classList.toggle('inactive');
}







