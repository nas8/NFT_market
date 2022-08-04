const modeBtn = document.querySelector('.mode');

modeBtn.addEventListener('click', () => {
    modeBtn.classList.toggle('light');
    document.body.classList.toggle('light');
})