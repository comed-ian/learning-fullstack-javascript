import React from 'react';
import ContestPreview from './ContestPreview';
import propTypes from 'prop-types';

const ContestList = ({contests, onContestClick}) => (
  <div className = "ContestList">
    {Object.keys(contests).map((contestId) =>
      <ContestPreview key = {contestId} onClick = {onContestClick} {...contests[contestId]}/>
    )}
  </div>
);

ContestList.propTypes = {
  contests: propTypes.object.isRequired,
  onContestClick: propTypes.func.isRequired
};

export default ContestList;