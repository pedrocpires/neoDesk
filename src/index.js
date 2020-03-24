const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('main')
})

app.get('/user', (req, res) => {
  res.render('user/index')
})

app.get('/operator', (req, res) => {
  res.render('operator/index')
})

app.get('/login', (req, res) => {
  res.render('login')
})

app.use(express.static(__dirname + '/public'));

app.listen(3333)