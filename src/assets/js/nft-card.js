const likeIcons = document.querySelectorAll('.nft-card__heart-icon');

console.log(likeIcons);

likeIcons.forEach(item => {
    item.addEventListener('click', event => {
        event.classList.toggle('liked');
    })
})