const  fs = require('fs');
const  path =  require('path');
 fs.readFile(process.argv[2],function(err, res){
    list.forEach(function (file) {
        if (path.extname(file) === '.' + process.argv[3])
          console.log(file)
      })

 })