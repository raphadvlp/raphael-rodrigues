function showBtn() {
    if(window.scrollY < 46 || window.scrollY === 0) {
        document.querySelector('.arrow-top').style.display = 'none';
    } else {
        document.querySelector('.arrow-top').style.display = 'block';
    }
}

window.addEventListener('scroll', showBtn);


// Mobile menu
// .menu-mobile:hover .bar:nth-child(1) {
//     transform: rotate(45deg) translate(5px, 5px);
// }
// .menu-mobile:hover .bar:nth-child(2) {
//     opacity: 0;
// }
// .menu-mobile:hover .bar:nth-child(3) {
//     transform: rotate(-45deg) translate(5px, -5px);
// }


let menuMobile = document.querySelector('.menu-mobile');
let menuMobileBar = document.querySelector('.menu-mobile .bar:nth-child(1)');
let menuMobileBar2 = document.querySelector('.menu-mobile .bar:nth-child(2)');
let menuMobileBar3 = document.querySelector('.menu-mobile .bar:nth-child(3)');

