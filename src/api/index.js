const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')
const config = require('./config/keys')
mongoose.connect(config.mongoURI,{useNewUrlParser: true}, function(err){
    if(err){
        console.log('Error connecting to the database')
    } else {
        console.log('Successfully connected to the database')
    }
})
const app = express()
const userRouter = require('./routes/userRoutes')()


app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use('/', userRouter)

const server = http.createServer(app)
server.listen(8080, () => console.log('Server listening on port 8080'))

module.exports = {
    path:'/api',
    handler: server
}