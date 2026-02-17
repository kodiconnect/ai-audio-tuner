const fs = require('fs');

const data = JSON.parse(fs.readFileSync('raw_dash_data.json', 'utf8'));
const base64Mag = data.magnitude;
const buffer = Buffer.from(base64Mag, 'base64');
const magnitudes = [];
for (let i = 0; i < buffer.length; i += 4) {
    magnitudes.push(buffer.readFloatBE(i)); 
}

const startFreq = data.startFreq;
const ppo = data.ppo;
const frequencies = magnitudes.map((_, i) => startFreq * Math.pow(2, i / ppo));

function getTarget(f) {
    if (f < 20) return 10;
    if (f < 100) return 10;
    if (f < 200) return 10;
    const octavesFrom200 = Math.log2(f / 200);
    return 10 - octavesFrom200;
}

const normalizationRange = magnitudes.filter((_, i) => frequencies[i] > 800 && frequencies[i] < 1200);
const avgLevel = normalizationRange.reduce((a, b) => a + b, 0) / (normalizationRange.length || 1);
const normalizedMagnitudes = magnitudes.map(m => m - avgLevel + getTarget(1000));

const errors = normalizedMagnitudes.map((m, i) => ({
    f: frequencies[i],
    error: m - getTarget(frequencies[i])
}));

const validErrors = errors.filter(e => e.f > 200 && e.f < 15000);

const significantPeaks = validErrors
    .filter(e => e.error > 1.5) 
    .sort((a, b) => b.error - a.error); 

const significantDips = validErrors
    .filter(e => e.error < -2.0) 
    .sort((a, b) => a.error - b.error); 

const finalFilters = [...significantPeaks.slice(0, 10)];
if (finalFilters.length < 10) {
    finalFilters.push(...significantDips.slice(0, 10 - finalFilters.length));
}

finalFilters.sort((a, b) => a.f - b.f);

console.log(JSON.stringify(finalFilters, null, 2));
