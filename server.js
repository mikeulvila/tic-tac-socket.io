'use strict';

const express = require('express');
const app = express();
//const pg = require('pg').native;
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const PORT = process.env.PORT || 3000;
// const POSTGRES_URL = process.env.POSTGRES_URL || 'postgres://localhost:5432/nodechat';
// const db = new pg.Client(POSTGRES_URL);

app.set('view engine', 'jade');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});

server.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`)
});

io.on('connection', (socket) => {
  console.log('server socket connection', socket.id);

  socket.on('player move', function(id) {
    socket.emit('send mark', id);

  });


});

// db.connect((err) => {
//   if (err) throw err
// });

// io.on('connection', (socket) => {
//   console.log('connection', socket.id);

//   db.query('SELECT * FROM chats', (err, result) => {
//     if (err) throw err

//     socket.emit('receiveChat', result.rows);
//   })

//   socket.on('sendChat', (msg) => {
//     console.log('on sendChat', msg);
//     // database insert
//     db.query('INSERT INTO chats (name, text) VALUES ($1, $2)',
//       [msg.name, msg.text], (err) => {

//         if (err) throw err;
//         //console.log('saved to db');
//         socket.emit('receiveChat', [msg]);
//     });

//   });

// });

