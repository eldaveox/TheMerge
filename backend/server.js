const express = require('express')
const app = express()
const path = require('path')
const bcrypt = require('bcrypt')
const session =require('express-session')
const port = 3000

// ---------------------------------session-------------------------------
    app.use(
        session({
        secret: 'key that will sign cookie', //only for production - erase later
        resave: false,
        saveUninitialized: false
    }))
    console.log (session)
// -----------------------------------------------------------------------
// ---------------------------------login---------------------------------
let users = []

app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.get('/users', (req,res)=>{
    res.json(users)
})

app.post('/users',async (req,res)=>{
    try {
        
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const user = { id: Date.now().toString(), email: req.body.email, password: hashedPassword }
        users.push(user)
        res.redirect('/login.html')
        res.status(201).send()
    } 
   
    catch {
        res.redirect('/raffle.html')
    }
    console.log(users)
})

app.delete ('/users/:id',(req,res) => {

    const { id } = req.params
    const deleted = users.find(user => user.id === id) //this is needed to identify the user in the array
    if(deleted){
        users = users.filter(user => user.id !== id)
        res.status(200).json(deleted)
    }else {
        res.status(404).json({message: "User not found"})
    }
})

app.get ('/users/:id',(req,res) => {

    const { id } = req.params
    const found = users.find(user => user.id === id)
    if(found){        
        res.status(200).json(found)
    }else {
        res.status(404).json({message: "User does not exist"})
    }
})

app.post('/login',async (req,res)=>{
    const user = users.find(user => user.email = req.body.email)
    if (user == null) {
        return res.status(400).send ('cannot find user')
    }
    try {
       if(await  bcrypt.compare(req.body.password, user.password)){
            req.session.user = user;
            req.session.save();
            res.redirect('/dashboard.html') 
       }else {
           res.send('not allowed!')
       }
    } catch {
        res.status(500).send()
    }
})


app.post('/logout', (req,res)=>{
    req.session.destroy()
    res.redirect('/login.html')
    res.status(201).send()
})
app.post('/update', (req,res)=>{
    res.redirect('/update.html')
})




// -----------------------routes------------------------------------------------

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
app.get('/dashboard.html',(req, res) => {
    res.sendFile (path.join(__dirname, '../html/dashboard.html'))
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
app.get('/update.html',(req, res) => {
    res.sendFile (path.join(__dirname, '../html/update.html'))
})

// -----------------------------------------



// -----------------------------------------






app.listen(port, console.info(`Listening on port ${port}`))