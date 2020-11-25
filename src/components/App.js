/* eslint-disable no-console */
import React from 'react';
import Header from './Header';
import Contest from './Contest';
import ContestList from './ContestList';
import propTypes from 'prop-types';
import * as api from '../api';

const pushState = (obj, url) =>
  window.history.pushState(obj, '', url);

const onPopState = (handler) => {
  window.onpopstate = handler;
};

class App extends React.Component {
  state = this.props.initialData;
  componentDidMount() {
    onPopState((event) => {
      this.setState({
        currentContestId: (event.state || {}).currentContestId
      });
    });
  }
  componentWillUnmount() {
    onPopState(null);
    console.log('Just Unmounted');
  }

  fetchContest = (contestId) => {
    pushState(
      {currentContestId: contestId},
      `/contest/${contestId}`
    );
    api.fetchContest(contestId).then(contest => {
      this.setState({
        currentContestId: contest.id,
        contests: {
          ...this.state.contests,
          //cache the contest on the state in a separate index
          [contest.id]: contest
        }
      });
    });
  };

  fetchContestList = () => {
    pushState(
      {currentContestId: null},
      '/'
    );
    api.fetchContestList().then(contests => {
      this.setState({
        currentContestId: null,
        contests
      });
    });
  };

  currentContest() {
    return this.state.contests[this.state.currentContestId];
  }

  pageHeader() {
    if (this.state.currentContestId) {
      return this.currentContest().contestName;
    }
    return 'Naming Contests';
  }

  currentContent() {
    if (this.state.currentContestId) {
      return <Contest {...this.currentContest()} contestListClick={this.fetchContestList}/>;
    }

    return <ContestList contests = {this.state.contests} onContestClick = {this.fetchContest} />;
  }

  render() {
    return (
      <div className = "App">
        <Header message = {this.pageHeader()}/>
        {this.currentContent()}
      </div>
    );
  }
}

App.propTypes = {
  initialData: propTypes.object.isRequired
};


export default App;