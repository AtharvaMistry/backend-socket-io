const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);


app.use(express.static(__dirname + '/client'));


io.on('connection', (socket) => {
    console.log('A user connected');


    socket.on('message', (message) => {
    io.emit('message', message);
    });


    socket.on('disconnect', () => {
    console.log('A user disconnected');
    });
});

http.listen(3000, () => {
    console.log('Server listening on http://localhost:3000');
});
