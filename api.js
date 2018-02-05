require('dotenv').config() //makes all .env methods available through process.env
const express = require('express')
const app = express()
const HTTPError = require('node-http-error')
const bodyParser = require('body-parser')
const port = process.env.PORT || 5000
const {} = require('ramda')

app.get('/', (req, res) => res.send('Meow.'))

app.listen(port, () => console.log('CATS!', port))
