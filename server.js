import express from 'express';
import apiRouter from './api';
import config from './config';

const server = express();
 
server.set('view engine', 'ejs');
 
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
