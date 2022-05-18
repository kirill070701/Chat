//подключение библиотеки express
const express = require('express')
const app = express()

//подключение юиюлиотеки socket.io. 
//Нужна для обмена данными между сервером и пользователем в реальном времени
const http = require('http').createServer(app)
const io = require('socket.io')(http)

//подключение библиотеки body-parser
//Нужна для обработки сервером полученных данных от пользователя
var bodyParser = require('body-parser')

//создание копии файла /function/socket.js
const socket = require('./function/socket')

//подключение шаблонизатора ejs в заменe html файлам
app.set("view engine", "ejs")

//предоставление статического пути к оcновным файлам в папке views
app.use(express.static(__dirname + '/views'))

//позволяет библиотеки body-parser подключить ПО для парсинга полученных данных
app.use(bodyParser.urlencoded({ extended: true }))

//GET запрос к корневой странице
app.get('/', (req, res)=>{
    res.render('ejs/index')     //файл который отправиться пользователю при запросе
})
//POST запрос к корневой стрнице
app.post('/', (req, res)=>{
    socket.username(io, req.body.name) //вызов копии функции username из файла /function/socket.js
    res.render('ejs/chat')  //файл который отправиться пользователю при запросе
})

socket.data(io) //вызов копии функции data из файла /function/socket.js

http.listen(3000, ()=>{
    console.log("Port - 3000")
})