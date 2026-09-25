const fs = require('fs');
const path = require('path');

const dir = 'c:\\Users\\NG\\Downloads\\ajmf-project-main\\ajmf-project-main';
const img1 = path.join(dir, 'images-photo', 'watercolor_frame_bg.png');
const img2 = path.join(dir, 'watercolor_frame_bg.png');

console.log("watercolor_frame_bg.png in images-photo:", fs.existsSync(img1));
console.log("watercolor_frame_bg.png in root:", fs.existsSync(img2));
