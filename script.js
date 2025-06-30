
'use strict';

const canvas = document.querySelector('canvas');
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

const pointers = [{ id: -1, down: false, moved: false, x: 0, y: 0, dx: 0, dy: 0, color: [30, 0, 300] }];
window.addEventListener('mousemove', e => {
    const pointer = pointers[0];
    pointer.down = true;
    pointer.moved = pointer.down;
    pointer.dx = (e.clientX - pointer.x) * 5.0;
    pointer.dy = (e.clientY - pointer.y) * 5.0;
    pointer.x = e.clientX;
    pointer.y = e.clientY;
});

function draw() {
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'rgba(0,0,0,0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    for (const p of pointers) {
        ctx.fillStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
        ctx.arc(p.x, p.y, 25, 0, Math.PI * 2);
        ctx.fill();
    }
    requestAnimationFrame(draw);
}

draw();
