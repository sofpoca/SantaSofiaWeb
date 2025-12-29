document.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    const images = [
        'images/header/1.png',
        'images/header/2.png',
        'images/header/3.png'
    ];

    let current = 0;

    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });

    function changeBackground() {
        hero.style.backgroundImage = `
            linear-gradient(rgba(0,0,0,0.75), rgba(26,29,66,0.9)),
            url(${images[current]})
        `;
        current = (current + 1) % images.length;
    }

    changeBackground();
    setInterval(changeBackground, 6000);
});
