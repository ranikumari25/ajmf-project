const { execSync } = require('child_process');
const path = require('path');

const edgePath = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const outputPath = path.join(__dirname, 'shot.png');
const url = "file:///C:/Users/NG/Downloads/ajmf-project-main/ajmf-project-main/programs.html";

execSync(`"${edgePath}" --headless --disable-gpu --screenshot="${outputPath}" --window-size=1400,2500 "${url}"`);
console.log("Screenshot saved to", outputPath);
