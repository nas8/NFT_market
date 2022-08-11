const modal = document.querySelectorAll('.modal');
const modalBtns = document.querySelectorAll('[data-modal]')
const modalCloseBtn = document.querySelectorAll('.modal__close');


modalBtns.forEach (elem => {
    elem.addEventListener('click', event => {
        let current = event.currentTarget;
        let modalId = current.getAttribute('data-modal');
        console.log(current);
        console.log(modalId);

    });
});
