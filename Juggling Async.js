var bl = require('bl')
var http = require('http')
var results = []
function printResults () {
    for (var i = 0; i < 3; i++)
      console.log(results[i])
  }
  
  function httpGet (index) {
    http.get(process.argv[2 + index], function (response) {
      response.pipe(bl(function (err, data) {
        if (err)
          return console.error(err)
  
        results[index] = data.toString()
        count++
  
        if (count == 3) // yay! we are the last one!
          printResults()
      }))
    })
  }
  
  for (var i = 0; i < 3; i++)
    httpGet(i)