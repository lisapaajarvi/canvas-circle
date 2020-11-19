window.addEventListener("load", main)

function main() {
    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext("2d");
    setFullscreen(canvas);
    draw(ctx);
}



function draw(ctx) {
    const radius = window.innerWidth * 0.2;
    const numberOfDots = 200;
    const multiplier = 2;


    drawCircle(ctx, radius);
    const dots = drawDotsOnCircle(ctx, radius, numberOfDots);
    drawLinesBetweenDots(ctx, multiplier, dots)
}

function drawCircle(ctx, radius) {
    ctx.strokeStyle = "green";
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.closePath();

    ctx.stroke();
}

function drawDotsOnCircle(ctx, radius, numberOfDots) {
    ctx.fillStyle = "purple";
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const dotRadius = radius / 80;

    const dots = [];

    for(let i = 0; i < numberOfDots; i++) {
        const angle = Math.PI * 2 / numberOfDots * i;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        
        dots.push({ x, y});

        ctx.beginPath();
        ctx.arc(x, y, dotRadius, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }
    return dots;
}

function drawLinesBetweenDots(ctx, multiplier, dots) {
    ctx.strokeStyle = "black"
    ctx.lineWidth = 2;

    ctx.beginPath();

    for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];
        const nextIndex = (i * multiplier) % dots.length;
        const nextDot = dots[nextIndex];

        ctx.moveTo(dot.x, dot.y);
        ctx.lineTo(nextDot.x, nextDot.y)
    }
    ctx.stroke();

}

function setFullscreen(canvas) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}