import express from 'express';
import path from 'path';
import http from 'http';
import render from '../utils/render';

const app = express();

app.locals.config = config;

app.set('views', 'src/server/views/');
app.set('view engine', 'jade');

app.use('/public/js', express.static(path.join(__dirname, '../../build/js')));
app.use('/public', express.static(path.join(__dirname, '../../build')));

app.use('/favicon.ico', (req, res) => {
  return;
});

app.use('/', render);

module.exports = http.Server(app);
