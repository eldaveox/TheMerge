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
app.get('/impressum.html',(req, res) => {
    res.sendFile (path.join(__dirname, '../html/impressum.html'))
})
app.get('/privacy.html',(req, res) => {
    res.sendFile (path.join(__dirname, '../html/privacy.html'))
})
app.get('/contact.html',(req, res) => {
    res.sendFile (path.join(__dirname, '../html/contact.html'))
})
app.get('/agb.html',(req, res) => {
    res.sendFile (path.join(__dirname, '../html/agb.html'))
})
app.get('/raffle.html',(req, res) => {
    res.sendFile (path.join(__dirname, '../html/raffle.html'))
})

app.listen(port, console.info(`Listening on port ${port}`))