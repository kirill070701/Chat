const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
var bodyParser = require('body-parser')

const socket = require('./function/socket')

app.set("view engine", "ejs")

app.use(express.static(__dirname + '/views'))
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res)=>{
    res.render('ejs/index')
})

app.post('/', (req, res)=>{
    console.log(req.body.name)
    socket.username(io, req.body.name)
    res.render('ejs/chat')
})
socket.connection(io)
socket.data(io)

http.listen(3000, ()=>{
    console.log("Port - 3000")
})