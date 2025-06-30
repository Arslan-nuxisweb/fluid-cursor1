
'use strict';
const canvas = document.getElementById('fluid-canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');
let hue = 0;

function draw(e) {
    ctx.beginPath();
    ctx.arc(e.clientX, e.clientY, 30, 0, Math.PI * 2);
    ctx.fillStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.fill();
    hue += 5;
}

canvas.addEventListener('mousemove', draw);
