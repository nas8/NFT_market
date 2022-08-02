const maxWindowWidth = 1920;
const intro = document.querySelector('.intro')
const introMainText = document.querySelector('.intro__main-text');
const introNftItems = document.querySelectorAll('.nft');
const introInner = document.querySelector('.intro__inner');

//change scale of intro main text

// window.addEventListener('resize', resizeIntro);
// window.addEventListener('load', resizeIntro);

// function resizeIntro() {
//     if (window.innerWidth < maxWindowWidth) {
//         introMainText.style.transform = `scale(${window.innerWidth/maxWindowWidth})`;

//         introNftItems.forEach (item => {
//             item.style.transform = `scale(${window.innerWidth/maxWindowWidth})`;
//         })
//     }
// }


// else {
//     introMainText.style.transform = 'scale(1)';

//     introNftItems.forEach (item => {
//         item.style.transform = 'scale(1)';
//     })
// }