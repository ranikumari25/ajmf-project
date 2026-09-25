const fs = require('fs');
const path = require('path');

const dir = 'c:\\Users\\NG\\Downloads\\ajmf-project-main\\ajmf-project-main';
console.log("Searching root for images/png/jpg:");
fs.readdirSync(dir).forEach(f => {
    if (f.endsWith('.png') || f.endsWith('.jpeg') || f.endsWith('.jpg') || f.endsWith('.svg')) {
        console.log("Root image:", f);
    }
});

const imgDir = path.join(dir, 'images-photo');
if (fs.existsSync(imgDir)) {
    console.log("\nSearching images-photo directory:");
    fs.readdirSync(imgDir).forEach(f => {
        console.log("images-photo:", f);
    });
}
