const header = document.querySelector('header');
const burgerMenu = document.querySelector('.burger');
const navMenu = document.querySelector('.top-bar__nav');

let scrollPos;


//deactivate viewport size changes when keyboard pop up on mobile devices;
if ("virtualKeyboard" in navigator) {
    navigator.virtualKeyboard.overlaysContent = true;
};


//show fixed header
window.addEventListener('scroll', showFixedNav, false);
window.addEventListener('load', showFixedNav, false);

function showFixedNav() {
    scrollPos = window.scrollY;

    if (scrollPos > 10 ) {
        header.classList.add('header-fixed');
    } else {
        header.classList.remove('header-fixed');
    };
}

//menu burger appearance
if (burgerMenu) {
    burgerMenu.addEventListener('click', function(e) {
        document.body.classList.toggle('_lock');
        burgerMenu.classList.toggle('_active');
        navMenu.classList.toggle('_active');
    })
};

/* add fixed height value for activation overflow scrolling,
when a mobile device in horizontal pos */
window.addEventListener('load', changeHeight, false);
window.addEventListener('resize', changeHeight, false);
function changeHeight() {
    if (window.outerHeight < 450) {
        navMenu.style.height = `${window.outerHeight}px`;
        navMenu.style.overflow = 'auto';

    } else {
        navMenu.style.height = 'auto';
        navMenu.style.overflow = 'hidden';
    }
};


