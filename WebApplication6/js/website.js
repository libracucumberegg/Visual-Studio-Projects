let lightbox = document.getElementById('lightbox');
let iframe = document.getElementById('content-box');

document.querySelectorAll('a[data-lightbox]').forEach(item => {
    item.addEventListener('click', event => {
        item.style.opacity = '0';
        item.style.transition = 'opacity 0.5s';

        setTimeout(() => {
            item.style.opacity = '1';
        }, 600);
        event.preventDefault();
        iframe.src = item.href;
        lightbox.style.display = 'block';
    })
});

document.getElementById('lightbox-close').addEventListener('click', () => {
    lightbox.style.display = 'none';
    iframe.src = ""; // fix browser still playing after closing
});