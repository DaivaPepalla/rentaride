const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/mydb'

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())

const alienRouter = require('./signup')
app.use('/signup',alienRouter)

app.listen(9000, () => {
    console.log('Server started')
})