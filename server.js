import express from 'express';
import apiRouter from './api';
import config from './config';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';

const server = express();
 
server.set('view engine', 'ejs');
server.use(sassMiddleware({
  src: path.join(__dirname, 'sass'),
  dest: path.join(__dirname, 'public')
}));
 
server.get('/', (req, res) => {
  res.render('index', {
    content: 'Hello Express with <em>EJS<em>'
  });  //render with EJS
});
 
server.use('/api', apiRouter);
server.use(express.static('public'));
 
server.listen(config.port, () => {
  //print on server terminal
  console.info('Express listening on port ', config.port);
});
