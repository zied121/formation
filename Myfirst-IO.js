const  fs = require('fs');
const  content= fs.readFileSync(process.argv[2], 'utf8');
const  lines = content.split('\n').length-1;