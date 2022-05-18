module.exports = {

    //функция для обмена данными между пользователями
    data:(io)=>{
        io.on('connection', (socket)=>{         //подключение пльзователя по ключу connection
            socket.on('socket', (msg)=>{        //получение данных от пользователей
                io.emit('socket', socket.username + ": " + msg)     //отправка данных пользователям
            })
        })
    },

    //функция устанавливающая имя подключенного пользователя
    username:(io, username)=>{
        io.on('connection', (socket)=>{
            socket.username = username
        })
    }
}
