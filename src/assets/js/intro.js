const h1 = document.querySelectorAll('h1');
const maxWidth = 1920;
const intro = document.querySelector('.intro');
const introInner = document.querySelector('.intro__inner');
const introSearch = document.querySelector('.intro__search');


if (window.innerWidth >= 1920) {
    h1.forEach( elem => {
        elem.style.fontSize = "120px";
    });
} else {
    h1.forEach( elem => {
        elem.style.fontSize = `${window.innerWidth*120/maxWidth}px`
    });
}
