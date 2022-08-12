const modal = document.querySelectorAll('.modal');
const modalBtns = document.querySelectorAll('[data-modal]')
const modalCloseBtn = document.querySelectorAll('.modal__close');

modalBtns.forEach (elem => {
    elem.addEventListener('click', event => {
        let current = event.currentTarget;
        let modalId = current.getAttribute('data-modal');
        let modal = document.getElementById(modalId);
        let modalInner = modal.querySelector('.modal__inner');

        modalInner.addEventListener('click', event => {
            event.stopPropagation();
        });

        modal.classList.add('show');
        if(document.body.classList.contains('_pc')) {
            document.body.classList.add('lock');
        }

        setTimeout(() => {
            modalInner.style.transform = 'none';
            modalInner.style.opacity = '1';
        }, 1);
    });
});


modalCloseBtn.forEach(elem => {
    elem.addEventListener('click', event => {
        let currentModal = event.currentTarget.closest('.modal');

        closeModal(currentModal);
    })
});

modal.forEach(elem => {
    elem.addEventListener('click', event => {
        let currentModal = event.currentTarget;

        closeModal(currentModal);
    })
});


function closeModal(currentModal) {
    let modalInner = currentModal.querySelector('.modal__inner');
    modalInner.removeAttribute('style');

    setTimeout(() => {
        currentModal.classList.remove('show');

        if(document.body.classList.contains('_pc')) {
            document.body.classList.remove('lock');
        }

    }, 200);
};