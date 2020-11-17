/* eslint-disable no-console */
import config from './config';
import axios from 'axios';
import React from 'react';
import App from './src/components/App';
import reactDOMServer from 'react-dom/server';

const serverRender = () =>
  axios.get(`${config.serverUrl}/api/contests`) 
    .then(resp => {
      return {
        initialMarkup: reactDOMServer.renderToString(
          <App initialContests = {resp.data.contests} />
        ),
        initialData: resp.data
      };
    })
    .catch(console.error);

export default serverRender;