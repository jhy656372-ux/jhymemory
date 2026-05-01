
const fs = require('fs');
const { createCanvas } = require('canvas');

const size = 512;
const canvas = createCanvas(size, size);
const ctx = canvas.getContext('2d');

// Background
ctx.fillStyle = '#FFFFFF';
ctx.fillRect(0, 0, size, size);

// Bear Face (Simple Circle)
ctx.fillStyle = '#8B4513'; // SaddleBrown
ctx.beginPath();
ctx.arc(size / 2, size / 2, size / 2.2, 0, Math.PI * 2, true);
ctx.fill();

// Ears
ctx.beginPath();
ctx.arc(size * 0.2, size * 0.2, size * 0.15, 0, Math.PI * 2, true); // Left Ear
ctx.arc(size * 0.8, size * 0.2, size * 0.15, 0, Math.PI * 2, true); // Right Ear
ctx.fill();

// Snout (Lighter Brown)
ctx.fillStyle = '#D2691E'; // Chocolate
ctx.beginPath();
ctx.ellipse(size / 2, size / 1.8, size / 3.5, size / 4.5, 0, 0, Math.PI * 2);
ctx.fill();

// Nose (Black)
ctx.fillStyle = '#000000';
ctx.beginPath();
ctx.ellipse(size / 2, size / 1.9, size / 8, size / 10, 0, 0, Math.PI * 2);
ctx.fill();

// Eyes (Black)
ctx.beginPath();
ctx.arc(size * 0.35, size * 0.45, size * 0.05, 0, Math.PI * 2, true); // Left Eye
ctx.arc(size * 0.65, size * 0.45, size * 0.05, 0, Math.PI * 2, true); // Right Eye
ctx.fill();

// Mouth
ctx.beginPath();
ctx.moveTo(size / 2, size / 1.8);
ctx.lineTo(size / 2, size / 1.6);
ctx.lineWidth = size * 0.02;
ctx.strokeStyle = '#000000';
ctx.stroke();

// Smile
ctx.beginPath();
ctx.arc(size / 2, size / 1.6, size / 8, 0, Math.PI, false);
ctx.stroke();

const buffer = canvas.toBuffer('image/png');
fs.writeFileSync('c:\\Users\\admin\\.gemini\\antigravity\\brain\\6c57b75d-ecfc-45ec-9379-0103d4ceb9f2\\daily_habit_bear_icon.png', buffer);
console.log('Icon created successfully');
