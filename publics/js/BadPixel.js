const pixelFixer = document.getElementById('pixelFixer');
const canvas = document.getElementById('pixelCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 100;
canvas.height = 100;

const pixelSize = 4;

function drawPixels() {
for (let y = 0; y < canvas.height; y += pixelSize) {
    for (let x = 0; x < canvas.width; x += pixelSize) {
        const r = Math.random() * 255;
        const g = Math.random() * 255;
        const b = Math.random() * 255;
        ctx.fillStyle = `rgb(${r},${g},${b})`;
        ctx.fillRect(x, y, pixelSize, pixelSize);
    }
}
}

function animatePixels() {
drawPixels();
requestAnimationFrame(animatePixels);
}

animatePixels();

let isDragging = false;
let startX, startY, offsetX, offsetY;

pixelFixer.addEventListener('mousedown', (e) => {
isDragging = true;

const rect = pixelFixer.getBoundingClientRect();
offsetX = e.clientX - rect.left;
offsetY = e.clientY - rect.top;

startX = e.clientX;
startY = e.clientY;

pixelFixer.style.cursor = 'grabbing';
});

window.addEventListener('mousemove', (e) => {
if (isDragging) {
    const newLeft = e.clientX - offsetX;
    const newTop = e.clientY - offsetY;

    const rect = pixelFixer.getBoundingClientRect();
    const maxLeft = window.innerWidth - rect.width;
    const maxTop = window.innerHeight - rect.height;

    pixelFixer.style.left = `${Math.max(0, Math.min(maxLeft, newLeft))}px`;
    pixelFixer.style.top = `${Math.max(0, Math.min(maxTop, newTop))}px`;
}
});

window.addEventListener('mouseup', () => {
isDragging = false;
pixelFixer.style.cursor = 'grab';
});