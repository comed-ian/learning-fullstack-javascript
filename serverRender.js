/* eslint-disable no-console */
import config from './config';
import axios from 'axios';
import React from 'react';
import App from './src/components/App';
import reactDOMServer from 'react-dom/server';

const getApiUrl = contestId => {
  if (contestId) {
    return `${config.serverUrl}/api/contests/${contestId}`;
  }
  return `${config.serverUrl}/api/contests`;
};

const getInitialData = (contestId, apiData) => {
  if (contestId) {
    return {
      currentContestId: apiData.id,
      contests: {
        [apiData.id]: apiData
      }
    };
  }
  return {
    contests: apiData.contests
  };
};

const serverRender = (contestId) =>
  axios.get(getApiUrl(contestId)) 
    .then(resp => {
      const initialData = getInitialData(contestId, resp.data);
      return {
        initialMarkup: reactDOMServer.renderToString(
          <App initialData = {initialData} />
        ),
        initialData
      };
    })
    .catch(console.error);

export default serverRender;