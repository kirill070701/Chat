function disconedUser(socket, io) {
    socket.on('disconnect', ()=>{
    })
}


module.exports = {
    connection: (io)=>{
        io.on('connection', (socket)=>{
            disconedUser(socket, io)
        })
    },
    data:(io)=>{
        io.on('connection', (socket)=>{
            socket.on('socket', (msg)=>{
                io.emit('socket', socket.username + ": " + msg)
            })
        })
    },
    username:(io, username)=>{
        io.on('connection', (socket)=>{
            socket.username = username
        })
    }
}
