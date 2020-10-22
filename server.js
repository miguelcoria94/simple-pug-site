const express = require('express')
const app = express();

app.set('views', './views')
app.set('view engine', 'pug')

app.get('/', function (req, res) {
    res.render('index', {title: 'Hey', message: 'Hello there!'})
})

app.listen(3050, function () {
    console.log('listening on http://localhost:3050')
})