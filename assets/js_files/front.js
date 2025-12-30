document.addEventListener('DOMContentLoaded', () => {
    const layers = document.querySelectorAll('.bg');
    if (layers.length < 2) return;

    const images = Array.from({ length: 11 }, (_, i) =>
        `assets/images/header/${i + 1}.jpg`
    );

    let index = 0;
    let active = 0;

    images.forEach(src => new Image().src = src);

    function changeBackground() {
        const next = (active + 1) % 2;

        layers[next].style.backgroundImage = `url(${images[index]})`;

        layers[next].classList.add('active');

        setTimeout(() => {
            layers[active].classList.remove('active');
            active = next;
        }, 50);

        index = (index + 1) % images.length;
    }

  changeBackground();
  setInterval(changeBackground, 6000);
});
