/* Game of Life in p5.js by Sam Johnson-Lacoss */

let size = Math.max(window.innerWidth, window.innerHeight);
let cols = 150;
const uni = new Universe(cols, cols, Math.round(size/cols));

function initP5(height, width) {
    var canvas = createCanvas(width, height);
    canvas.parent("game-of-life");
    uni.randomize();
    renderP5();
}

function renderP5() {
    if (uni.paused) return;
    for (let i = 0; i < uni.height; i++) {
        for (let j = 0; j < uni.width; j++) {
            if (uni.get(i, j) == 1) {
                fill(33); // TODO: Make this a gradient
            } else {
                fill(0);
            }
            square(j * uni.cellSize, i * uni.cellSize, uni.cellSize);
        }
    }
}

function resize() {
    size = Math.max(window.innerWidth, window.innerHeight);
    uni.cellSize = size/uni.width;
    resizeCanvas(size, size);
}

function setup() {
    initP5(size, size);
    resize(); // For good measure
    frameRate(15);
}
draw = function () {
    uni.tick();                
    renderP5();
}

window.onresize = resize;

function reset() {
    uni.randomize();
    uni.play();
}

setInterval(() => {
    let elem = document.elementFromPoint(10, 175);
    if (elem.classList[0] == "p5Canvas") {
        uni.play();
    } else {
        uni.pause();
    }
}, 1000/5);