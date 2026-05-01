
const fs = require('fs');
const { createCanvas } = require('canvas');

const size = 512;
const canvas = createCanvas(size, size);
const ctx = canvas.getContext('2d');

// Background (Mint Color from app theme)
ctx.fillStyle = '#2beead';
ctx.fillRect(0, 0, size, size);

// Text (Dark Color from app theme)
ctx.font = 'bold 100px sans-serif'; // Reduced font size to fit padding
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.fillStyle = '#1a4d3a';

// First Line
ctx.fillText('Daily', size / 2, size / 2 - 60);

// Second Line
ctx.fillText('Habit', size / 2, size / 2 + 60);

const buffer = canvas.toBuffer('image/png');
fs.writeFileSync('c:\\Users\\admin\\.gemini\\antigravity\\brain\\6c57b75d-ecfc-45ec-9379-0103d4ceb9f2\\daily_habit_text_icon.png', buffer);
console.log('Text icon created successfully');
