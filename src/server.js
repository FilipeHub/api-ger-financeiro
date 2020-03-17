require('dotenv').config({  
    path: process.env.NODE_ENV === "test" ? ".env.testing" : ".env"
});

const mongoose = require('mongoose');

const app = require('./app');
const MessageController = require('./controllers/MessageController'); 
const {addUser, getUser} = require('./utils/utils')

mongoose.connect(process.env.DB_CONNECTION, 
    {useNewUrlParser:true,
        useCreateIndex: true,
        useUnifiedTopology: true});
        
const http = require('http').createServer(app);

//Socket.io part of the system, that allows the real-time message
const io = require('socket.io')(http);

io.set('origins', process.env.FRONTEND_URL);

io.on('connection', (socket) => {
    socket.on('join', ({ name, room }) => {
        const { user } = addUser({id: socket.id, name, room});

        socket.emit('message', { user: 'admin' , text: `${user.name}, welcome to the room ${user.room}` });
        socket.broadcast.to(user.room).emit('message', {user : 'admin', text: `${user.name} just entering the room ${user.room}`});

        socket.join(user.room);
    });
    
    socket.on('sendMessage', ({message, userId}) => {
        const user = getUser(socket.id);
        
        MessageController.save(message, userId);

        io.emit('message', { user: user.name, text: message});
    });
    
    socket.on('disconnect', () => {
        console.log('User had left');
    })
})

//Running the server
http.listen(process.env.PORT, () => {
    console.log("Server is running on port ", process.env.PORT);
});

