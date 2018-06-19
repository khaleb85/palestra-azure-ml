let data = [];

let w = 1;
let b = 0;

let xmean = 0;
let ymean = 0;

function linearRegression() {
    setMeans();
    w = getWeight();
    b = getBias();
}

function getBias() {
    b = ymean - w * xmean;
	return b;
}

function getWeight() {
    let numerator = 0;
    let denominator = 0;
    for(let i = 0; i < data.length; i++) {
        const x = data[i].x;
        const y = data[i].y;

        numerator += (x - xmean) * (y - ymean);
        denominator += (x - xmean) * (x - xmean);
    }

    w = numerator / denominator;
	return w;
}

function setMeans() {
    let xsum = 0;
    let ysum = 0;

    for(let i = 0; i < data.length; i++) {
        xsum += data[i].x;
        ysum += data[i].y;
    }

    xmean = xsum / data.length;
    ymean = ysum / data.length;
}