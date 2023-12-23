const express = require('express')
const path = require('path')

const app = express()
const port = 8080

app.use(express.static('public'))

// Using express.static serves 'index.html' automatically for the root route ('/')

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/about.html'))
})

app.get('/contact-me', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/contact-me.html'))
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, '/public/404.html'))
})
