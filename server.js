const path = require('path');
const express = require('express');
const webpack = require('webpack');
let config = require('./webpack.dev.config');

const env = process.env.NODE_ENV || 'development';
const port = parseInt(process.env.PORT, 10) || 8000;

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

app.listen(port);

// little hack to prevent app from sleeping on heroku
// https://quickleft.com/blog/6-easy-ways-to-prevent-your-heroku-node-app-from-sleeping/
if (env === 'production') {
  const http = require("http");
  setInterval(function() {
      http.get("http://sims-games.herokuapp.com");
  }, 3000000); // every 50 minutes
}
