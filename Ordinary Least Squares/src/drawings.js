const backgroundColor = '#c0d6e4';
const pointColor = '#1717d8';
const lineColor = '#551A8B';

function setup() {
    createCanvas(800, 800);
    background(backgroundColor);
}

function mousePressed() {
    const x = map(mouseX, 0, width, 0, 1);
    const y = map(mouseY, 0, height, 1, 0);

    const point = createVector(x, y);
    data.push(point);
}

function draw() {
	document.querySelector('#w span').innerText = w;
	document.querySelector('#b span').innerText = b;
    background(backgroundColor);
    for(let i = 0; i < data.length; i++) {
        const x = map(data[i].x, 0, 1, 0, width);
        const y = map(data[i].y, 0, 1, height, 0);

        fill(pointColor);
        stroke(pointColor);
        ellipse(x, y, 8, 8);
    }

    if(data.length > 1) {
        linearRegression();
        drawLine();
    }
}

function drawLine() {
    let x1 = 0;
    let y1 = w * x1 + b;
    let x2 = 1;
    let y2 = w * x2 + b;

    x1 = map(x1, 0, 1, 0, width);
    y1 = map(y1, 0, 1, height, 0);

    x2 = map(x2, 0, 1, 0, width);
    y2 = map(y2, 0, 1, height, 0);

    stroke(lineColor);
    line(x1, y1, x2, y2);
}