const likeBtn = document.querySelector('#likeBtn');

let liked = false;

likeBtn.addEventListener('click', () => {
    liked = !liked;

    if (liked) {
        likeBtn.textContent = '❤️ Liked';
        likeBtn.classList.add('liked');
    } else {
        likeBtn.textContent = '🤍 Like';
        likeBtn.classList.remove('liked');
    }
});