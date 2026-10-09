// TEXT SLANTING
const button = document.querySelector('.follow-button');

document.addEventListener('mousemove', (e) => {
    rotateElement(e, button);
});

function rotateElement(event, element) {
    const x = event.clientX;
    const y = event.clientY;

    const middleX = window.innerWidth / 2;
    const middleY = window.innerHeight / 2;

    const offsetX = ((x - middleX) / middleX) * 45;
    const offsetY = ((y - middleY) / middleY) * 45;

    element.style.setProperty('--rotateX', -1 * offsetY + 'deg');
    element.style.setProperty('--rotateY', offsetX + 'deg');
}