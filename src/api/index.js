const express = require('express')
const http = require('http')

const userRouter = require('./routes/userRoutes')()

const app = express()

app.use('/', userRouter)

const server = http.createServer(app)
server.listen(8080, () => console.log('Server listening on port 8080'))

module.exports = {
    path:'/api',
    handler: server
}