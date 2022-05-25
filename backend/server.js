const express = require('express')
const app = express()
const path = require('path');
const bcrypt = require('bcrypt')
const port = 3000
// ---------------------------------login---------------------------------
app.use(express.json())

const users = []

app.get('/raffle', (req,res)=>{
    res.json(users)
})

app.post('/raffle',async (req,res)=>{

    try {
       
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const user = { email: req.body.email, password: hashedPassword }
        users.push(user)
        res.status(201).send()
    } 
   
    catch {
        res.redirect(path.join(__dirname, '../html/raffle.html'))
    }
    console.log(users)
})

app.post('/login',async (req,res)=>{
    const user = users.find(user.email = req.body.email)
    if (user = null) {
        return res.status(400).send ('cannot find user')
    }
    try {
       if(await  bcrypt.compare(req.body.password, user.password)){
           res.send('success!!!')
       }else {
           res.send('not allowed!')
       }
    } catch {
        res.status(500).send()
    }
})

// -----------------------------------------------------------------------

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