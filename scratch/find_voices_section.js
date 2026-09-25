const fs = require('fs');
const path = require('path');

const dir = 'c:\\Users\\NG\\Downloads\\ajmf-project-main\\ajmf-project-main';
const content = fs.readFileSync(path.join(dir, 'index.html'), 'utf8');

const lines = content.split('\n');
lines.forEach((line, i) => {
    if (line.toLowerCase().includes('voice') || line.toLowerCase().includes('inspire') || line.toLowerCase().includes('video') || line.toLowerCase().includes('student') || line.toLowerCase().includes('story') || line.toLowerCase().includes('card')) {
        console.log(`L${i+1}: ${line.trim()}`);
    }
});
