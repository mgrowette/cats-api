require('dotenv').config() //makes all .env methods available through process.env
const express = require('express')
const app = express()
const HTTPError = require('node-http-error')
const bodyParser = require('body-parser')
const port = process.env.PORT || 5000
const {} = require('ramda')

const cats = [
  { name: 'Mittens', age: 3, gender: 'Female', breed: 'Tabby' },
  { name: 'Muffins', age: 2, gender: 'Male', breed: 'Siamese' },
  { name: 'Mr. Handsome', age: 8, gender: 'Male', breed: 'Tom' },
  { name: 'Miss Krunkles', age: 5, gender: 'Female', breed: 'Tabby' }
]

app.get('/', (req, res) => res.send('Meow.'))

app.get('/cats', (req, res) => res.send(cats))

app.listen(port, () => console.log(port, 'CATS! OH MY!'))
