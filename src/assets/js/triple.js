const tripleItem = document.querySelector('.triple__item');
const tripleItemCenter = document.querySelector('.triple__item_backg_grad');

let path = window.location.pathname;


tripleItemCenter.style.height = `${tripleItem.clientHeight + 21}px`;

window.addEventListener('resize', () => {
    tripleItemCenter.style.height = `${tripleItem.clientHeight + 21}px`;
})




