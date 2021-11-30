var socket = io.connect()

const read = document.getElementById("read")
const send = document.getElementById("send")
const chat = document.getElementById("chat")

/*function dispath(data) {
    socket.emit('socket', data)
}*/

send.onclick = ()=>{
    socket.emit('socket', read.value)
    read.value = ""
}

socket.on('socket', (msg)=>{
    console.log(msg )
    chat.innerHTML = chat.innerHTML + "<p>" + msg + "</<p>"
})