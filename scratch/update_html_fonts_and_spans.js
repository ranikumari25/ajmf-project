const fs = require('fs');
const path = require('path');

const dir = 'c:\\Users\\NG\\Downloads\\ajmf-project-main\\ajmf-project-main';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // 1. Add Caveat to Google Fonts URL if missing
    if (content.includes('fonts.googleapis.com/css2') && !content.includes('family=Caveat')) {
        content = content.replace(
            /href="https:\/\/fonts\.googleapis\.com\/css2\?family=/,
            'href="https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family='
        );
        modified = true;
    }

    // 2. Ensure raw HTML inside partner-desc has navgurukul-name span wrapper for NavGurukul if it's strong or plain
    if (content.includes('class="partner-desc"')) {
        content = content.replace(
            /(<p class="partner-desc"[^>]*>[\s\S]*?)<strong>NavGurukul<\/strong>/g,
            '$1<span class="navgurukul-name"><span class="nav-text">Nav</span><span class="gurukul-text">Gurukul</span></span>'
        );
        content = content.replace(
            /(<p class="partner-desc"[^>]*>[\s\S]*?)(?<!<span class="nav-text">)NavGurukul(?!<\/span>)/g,
            (match, p1) => {
                if (p1.includes('<span class="navgurukul-name">')) return match;
                return p1 + '<span class="navgurukul-name"><span class="nav-text">Nav</span><span class="gurukul-text">Gurukul</span></span>';
            }
        );
        modified = true;
    }

    if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated: ${file}`);
    } else {
        console.log(`Unchanged: ${file}`);
    }
});
