/* eslint-disable no-console */
import React from 'react';
import Header from './Header';
import ContestPreview from './ContestPreview';
import propTypes from 'prop-types';
import axios from 'axios';

class App extends React.Component {
  state = {
    pageHeader: 'Naming Contests',
    contests: []
  };
  componentDidMount() {
    axios.get('/api/contests') 
      .then(resp => {
        this.setState({
          contests: resp.data.contests
        });
      })
      .catch(console.error);

    
  }
  componentWillUnmount() {
    console.log('Just Unmounted');
  }
  render() {
    return (
      <div className = "App">
        <Header message = {this.state.pageHeader}/>
        <div>
          {this.state.contests.map((contest) =>
            <ContestPreview key = {contest.id} {...contest}/>
          )}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  contests: propTypes.array.isRequired
};

App.defaultProps = {
  contests: '{}'
};

export default App;