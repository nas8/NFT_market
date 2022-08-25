const tripleItem = document.querySelector('.triple__item');
const tripleItemCenter = document.querySelector('.triple__item_backg_grad');

path = window.location.pathname;
// console.log(window.location.pathname);

if(path === '/index.html') {
    tripleItemCenter.style.height = `${tripleItem.clientHeight + 21}px`;

    window.addEventListener('resize', () => {
        tripleItemCenter.style.height = `${tripleItem.clientHeight + 21}px`;
    })
}



