const express = require('express')
const app = express()
const port = 3000
var os = require('os');

app.get('/', function (req, res) {
  var body = "<html><head><title>Hello from " + os.hostname() + "</title></head>" +
    "<body>" +
    "<img width=250px src=https://www.exoscale.com/static/img/exoscale-logo-full-201711.svg alt=ExoscaleLogo><br>" +
    "<p>Hello World from host " + os.hostname() + "!</p>" +
    "Hello from A1 training</body></html>"
  res.send(body)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


