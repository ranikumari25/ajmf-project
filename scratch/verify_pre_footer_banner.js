const fs = require('fs');
const path = require('path');

const dir = 'c:\\Users\\NG\\Downloads\\ajmf-project-main\\ajmf-project-main';
const aboutHtml = fs.readFileSync(path.join(dir, 'About.html'), 'utf8');
const aboutCss = fs.readFileSync(path.join(dir, 'About.css'), 'utf8');

console.log("=== VERIFYING PRE-FOOTER VISION BANNER ===");
console.log("About.html contains CARRYING FORWARD HIS VISION tag:", aboutHtml.includes('CARRYING FORWARD HIS VISION'));
console.log("About.html contains line 'His vision continues to':", aboutHtml.includes('His vision continues to'));
console.log("About.html contains line 'inspire':", aboutHtml.includes('<span class="highlight-orange">inspire</span>'));
console.log("About.html contains 'Support The Mission':", aboutHtml.includes('Support The Mission'));
console.log("About.html contains 'Get Involved':", aboutHtml.includes('Get Involved'));
console.log("About.html contains 'More Opportunities':", aboutHtml.includes('More Opportunities'));
console.log("About.html contains 'Stronger Communities':", aboutHtml.includes('Stronger Communities'));
console.log("About.html contains 'A Brighter Tomorrow':", aboutHtml.includes('A Brighter Tomorrow'));
console.log("About.html contains 'Capture\\nCreate\\nInspire' accent:", aboutHtml.includes('Capture<br>Create<br>Inspire'));
console.log("About.html contains 'A legacy\\nthat lives on' badge:", aboutHtml.includes('A legacy<br>that lives on'));
console.log("About.html contains left/right botanical watermarks:", aboutHtml.includes('vision-botanical-left') && aboutHtml.includes('vision-botanical-right'));
console.log("About.css contains .ajmf-vision-banner dark navy styling:", aboutCss.includes('.ajmf-vision-banner') && aboutCss.includes('#06192e'));
