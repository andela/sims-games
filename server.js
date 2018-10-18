const path = require('path');
const http = require('http')
const express = require('express');
const webpack = require('webpack');
let config = require('./webpack.dev.config');


const env = process.env.NODE_ENV || 'development';
const port = parseInt(process.env.PORT, 10) || 3000;

if (env === 'production') {
  config = require('./webpack.config');
}

var app = express();

app.set('port', port);

var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('/build/index.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.js'));
});


app.use(express.static(path.join(__dirname, 'client','public')));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'client', 'index.html'));
});

const server = app.listen(port);

// // little hack to prevent app from sleeping on heroku
// // https://quickleft.com/blog/6-easy-ways-to-prevent-your-heroku-node-app-from-sleeping/
// if (env === 'production') {
//   const https = require("https");
//   setInterval(function() {
//     https.get("https://sims-games.herokuapp.com");
//   }, 300000); // every 5 minutes
// }

const io = require('socket.io')(server);

let roomUsers = {};
io.on('connection', (socket) => {
  let timerValue = null;

  socket.on('conected', (data) => {
    let newAdmin = '';
    if (data) {
      const { roomId, isAdmin, currentTimerValue, socketId } = data;
      io['timerValue'] = currentTimerValue;
      if(roomUsers[roomId]  && socketId){
        roomUsers[roomId].splice(roomUsers[roomId].indexOf(socketId), 1);
        isRoomEmpty = roomUsers[roomId].length <= 0;
        if(isAdmin && !isRoomEmpty){
          newAdmin = roomUsers[roomId][0];
          io.to(newAdmin).emit('newAdmin', { timerValue: io['timerValue'] }); 
          io[newAdmin] = {roomId, admin: true}; 
        }
      }
    }
  })

  socket.on('start', ( data ) => {
    const { roomId, questionNum, newGame, questions } = data;

    socket.join(roomId);
    roomUsers[roomId] = roomUsers[roomId] ? 
    [...roomUsers[roomId], socket.id] : [socket.id];

    io[socket.id] = { roomId, admin: false };

    if ( newGame ){
      io[roomId] = { questionNum, questions }; 
      io[socket.id] = { roomId, admin: true};
    } else {
      isAdmin = roomUsers[roomId].length === 1;
      if(isAdmin){
        newAdmin = roomUsers[roomId][0];
        io.to(newAdmin).emit('newAdmin', {timerValue: io['timerValue']});
        io[newAdmin] = {roomId, admin: true};
      }
    }
  });

  socket.on('getNewQuestion', ( data ) => {
    const { roomId, qIndex, nextQuestion } = data;
    const { questions, questionNum } = io[roomId];
    if(questionNum){
      questions.tasks.splice(parseInt(questionNum), 1);
    }
    const currQuestion = questions.tasks.splice(parseInt(qIndex), 1);
    console.log('>>>>>', questions.tasks.length)
    io.to(roomId).emit('getNewQuestion', { currQuestion, questions });
    io[roomId] = { qIndex, questions, currQuestion: currQuestion[0] };
  });

  socket.on('counter', ({ counter, roomId }) => {
    io.to(roomId).emit('counter', { counts: counter });
  });

  socket.on('pageRestarted', ({ roomId, newQuestions }) => {
    socket.to(roomId).emit('pageRestarted', { newQuestions });
  });

  socket.on('gameOver', ({ roomId }) => {
    io.to(roomId).emit('gameOver');
  });

  socket.on('setQuestion', ( data ) => {
    const { roomId } = data;
    let gameQuestion = {};
    const { questionNum, questions } = io[roomId];
    const { currQuestion } = io[roomId];
    if (currQuestion) {
      gameQuestion = currQuestion;
    } else {
      gameQuestion = questions.tasks[questionNum];
    }
    io.to(roomId).emit('setQuestion', { gameQuestion, questions });
    io[roomId] = { questionNum, questions, currQuestion };
  });


});
