// Imports
const express = require('express')
const app = express()
const port = 5000

// Static Files
app.use(express.static('public'));
// Specific folder example
// app.use('/css', express.static(__dirname + 'public/css'))
// app.use('/js', express.static(__dirname + 'public/js'))
// app.use('/img', express.static(__dirname + 'public/images'))

// Set View's
app.set('views', './views');
app.set('view engine', 'ejs');

// Navigation
app.get('', (req, res) => {
    res.render('pages/index', { text: 'Hey' })
})

app.get('/about', (req, res) => {
   res.sendFile(__dirname + '/views/about.html'),
   res.render('pages/about')
})

app.get('/uses', (req, res) => {
   res.sendFile(__dirname + '/views/uses.html'),
   res.render('pages/uses')
})

app.get('/game', (req, res) => {
   res.sendFile(__dirname + '/views/game.html'),
   res.render('pages/game')
})

app.get('/contact', (req, res) => {
   res.sendFile(__dirname + '/views/contact.html'),
   res.render('pages/contact')
})

app.listen(port, () => console.info(`App listening on port ${port}`))