const http = require('node:http')
const fs = require('node:fs')

let page404

fs.readFile('./404.html', (err, data) => {
  page404 = data
})

const server = http.createServer((req, res) => {
  const path = req.url
  const filename = path === '/' ? './index.html' : `.${path}.html`

  fs.readFile(filename, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' })
      return res.end(page404)
    }
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write(data)
    return res.end()
  })
})

server.listen(8080, () => {
  console.log('Server running')
})
