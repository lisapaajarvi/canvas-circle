window.addEventListener("load", main)

function main() {
    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext("2d");
    setFullscreen(canvas);
    draw(context);
}

function setFullscreen(canvas) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function draw(context) {

    const numberOfDots = 6;
    const multiplier = 2;

    
    // drawCircle

    // drawDotsOnCircle

    // drawLinesBetweenDots
}