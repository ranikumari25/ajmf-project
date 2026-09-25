const fs = require('fs');
const path = require('path');

const dir = 'c:\\Users\\NG\\Downloads\\ajmf-project-main\\ajmf-project-main\\images-photo';
if (fs.existsSync(dir)) {
    console.log(fs.readdirSync(dir));
} else {
    console.log("images-photo dir does not exist");
}
