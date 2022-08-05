const modeBtn = document.querySelector('.btn-mode');
let currentMode;

if(localStorage.getItem('mode') === null) {
    localStorage.setItem('mode', 'dark')
}

currentMode = localStorage.getItem('mode');

function setMode(){
    if(currentMode === 'dark') {
        modeBtn.classList.remove('light');
        document.body.classList.remove('light');
    } else {
        modeBtn.classList.add('light');
        document.body.classList.add('light');
    }
}
setMode();

modeBtn.addEventListener('click', () => {
    currentMode = localStorage.getItem('mode');

    if (currentMode === 'dark') {
        localStorage.setItem('mode', 'light');
        modeBtn.classList.add('light');
        document.body.classList.add('light');

    } else {
        localStorage.setItem('mode', 'dark');
        modeBtn.classList.remove('light');
        document.body.classList.remove('light');
    };
})


