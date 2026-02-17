const fs = require('fs');

const data = {
    "unit": "SPL",
    "smoothing": "1/6",
    "startFreq": 9.8876953125,
    "ppo": 12,
    "magnitude": "QoY+2EKIr4NClkaVQqDXgkKpii1CspODQrrM+kLC21dCy676QtQ2QULcLmJC4x4sQufmQELrAE1C7fh9QvE3WkL0vA9C+KzPQv0Kx0MAjWhDAfJeQwLuKUMEajxDBJJbQwJNAUL8ysdC/E7eQv5yfEL9LdtC+G8HQvG1GkLqiWlC5RJNQuGaHkLe0DdC2StpQtEqK0LIhvtCvrRRQriS1A=="
};

const base64Mag = data.magnitude;
const buffer = Buffer.from(base64Mag, 'base64');
const magnitudes = [];
for (let i = 0; i < buffer.length; i += 4) {
    magnitudes.push(buffer.readFloatBE(i));
}

const frequencies = [];
for (let i = 0; i < magnitudes.length; i++) {
    frequencies.push(data.startFreq * Math.pow(2, i / data.ppo));
}

const points = frequencies.map((f, i) => ({ f, m: magnitudes[i] }));
const sorted = points.sort((a, b) => b.m - a.m).slice(0, 10);
console.log(JSON.stringify(sorted, null, 2));
