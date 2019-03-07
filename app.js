const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const feedRoutes = require('./routes/feed')

// app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    next()
})

app.use('/feed', feedRoutes)

app.listen(3000, () => {
    console.log('Server running on port:3000')
})