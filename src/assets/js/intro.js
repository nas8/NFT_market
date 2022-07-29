const maxWindowWidth = 1920;
const intro = document.querySelector('.intro')
const introMainText = document.querySelector('.intro__main-text');
const introNftItems = document.querySelectorAll('.nft');
const introInner = document.querySelector('.intro__inner');

//change scale of intro main text
if (window.innerWidth < 1920) {
    introMainText.style.transform = `scale(${window.outerWidth/maxWindowWidth})`;

    introNftItems.forEach (item => {
        item.style.transform = `scale(${window.outerWidth/maxWindowWidth})`;
    })
}

// console.log(intro.clientHeight)