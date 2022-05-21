const express = require('express')
const app = express()
const path = require('path');
const port = 3000

app.use(express.static(path.join(__dirname, '../')));

app.get('/',(req, res) => {
    res.sendFile (path.join(__dirname, '../html/index.html'))
})
app.get('/index.html',(req, res) => {
    res.sendFile (path.join(__dirname, '../html/index.html'))
})
app.get('/tickets.html',(req, res) => {
    res.sendFile (path.join(__dirname, '../html/tickets.html'))
})
app.get('/Lineup.html',(req, res) => {
    res.sendFile (path.join(__dirname, '../html/lineup.html'))
})
app.get('/info.html',(req, res) => {
    res.sendFile (path.join(__dirname, '../html/info.html'))
})
app.get('/login.html',(req, res) => {
    res.sendFile (path.join(__dirname, '../html/login.html'))
})

app.listen(port, console.info(`Listening on port ${port}`))