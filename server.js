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

//import serverRender from './serverRender';
import serverRender from './serverRender';
 
server.get('/', (req, res) => {
  serverRender()
    .then(( {initialMarkup, initialData} ) => {
      res.render('index', {
        initialMarkup,
        initialData
      });  //passing through to render with EJS
    })
    .catch(console.error);
});

 
server.use('/api', apiRouter);
server.use(express.static('public'));
 
server.listen(config.port, config.host, () => {
  //print on server terminal
  console.info('Express listening on port ', config.port);
  
});
