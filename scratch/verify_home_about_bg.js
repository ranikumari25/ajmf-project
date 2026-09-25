const fs = require('fs');
const path = require('path');

const dir = 'c:\\Users\\NG\\Downloads\\ajmf-project-main\\ajmf-project-main';
const indexHtml = fs.readFileSync(path.join(dir, 'index.html'), 'utf8');

console.log("=== VERIFYING HOME PAGE ABOUT ANISH BACKGROUND LAYER ===");
console.log("about-watercolor-bg-layer present:", indexHtml.includes('about-watercolor-bg-layer'));
console.log("Uses watercolor_frame_bg.png:", indexHtml.includes("url('images-photo/watercolor_frame_bg.png')"));
console.log("Opacity set to 0.15:", indexHtml.includes("opacity: 0.15"));
console.log("Building image present and untouched:", indexHtml.includes('src="Building.jpeg"'));
console.log("Layer order z-index 0/1/2 present:", indexHtml.includes('z-index: 0;') && indexHtml.includes('z-index: 2;'));
