const fs = require('fs');
const path = require('path');
const http = require('http');

// Simple verification script to check HTML content and CSS rules
const dir = 'c:\\Users\\NG\\Downloads\\ajmf-project-main\\ajmf-project-main';
const headerCss = fs.readFileSync(path.join(dir, 'header.css'), 'utf8');
const footerCss = fs.readFileSync(path.join(dir, 'footer.css'), 'utf8');
const aboutCss = fs.readFileSync(path.join(dir, 'About.css'), 'utf8');

console.log("=== Checking CSS Rules ===");
console.log("footer.css imports Caveat:", footerCss.includes("family=Caveat"));
console.log("footer.css partner-script-accent font-family:", footerCss.includes("font-family: 'Caveat', 'Playfair Display', cursive, serif !important;"));
console.log("footer.css gurukul-text white rule:", footerCss.includes(".partner-left-panel .gurukul-text") && footerCss.includes("color: #FFFFFF !important;"));
console.log("header.css gurukul-text white rule:", headerCss.includes(".partner-left-panel .gurukul-text"));

const htmlFiles = [
    'index.html', 'About.html', 'Apply.html', 'A_day.html', 'campusled.html',
    'contact.html', 'donate.html', 'events.html', 'facility.html', 'gallery.html',
    'getinvolved.html', 'mission.html', 'padagogy.html', 'programs.html', 'success.html'
];

console.log("\n=== Checking HTML Files ===");
htmlFiles.forEach(file => {
    const content = fs.readFileSync(path.join(dir, file), 'utf8');
    const hasCaveatFont = content.includes('Caveat');
    const hasPartnerCard = content.includes('partner-left-panel');
    const hasGurukulSpan = content.includes('gurukul-text');
    const hasAccent = content.includes('partner-script-accent');

    console.log(`${file.padEnd(20)} | Card: ${hasPartnerCard} | Accent: ${hasAccent} | GurukulSpan: ${hasGurukulSpan} | CaveatFont: ${hasCaveatFont}`);
});
