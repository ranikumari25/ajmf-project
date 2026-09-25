const fs = require('fs');
const path = require('path');

const dir = 'c:\\Users\\NG\\Downloads\\ajmf-project-main\\ajmf-project-main';
const styleCss = fs.readFileSync(path.join(dir, 'style.css'), 'utf8');

console.log("=== VERIFYING VOICES SECTION BACKGROUND ===");
console.log("style.css has ::before pseudo-element:", styleCss.includes('.video-carousel-section::before'));
console.log("style.css sets background-image to watercolor_frame_bg.png:", styleCss.includes("images-photo/watercolor_frame_bg.png"));
console.log("style.css sets opacity to 0.15:", styleCss.includes("opacity: 0.15"));
console.log("style.css sets z-index: 1 for content layer:", styleCss.includes("z-index: 1"));
