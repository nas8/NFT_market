const likeIcons = document.querySelectorAll('.nft-card__heart-icon');

likeIcons.forEach(item => {
    item.addEventListener('click', event => {
        event.classList.toggle('liked');
    })
})