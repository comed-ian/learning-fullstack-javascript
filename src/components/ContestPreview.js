import React, {Component} from 'react';
import propTypes from 'prop-types';

class ContestPreview extends Component {
  handleClick = () => {
    this.props.onClick(this.props.id);
  }

  render() {
    return (
      <div className = "ContestPreview link" onClick={this.handleClick}>
        <div className = "category-name">
          {this.props.categoryName}
        </div>
        <div className = "contest-name">
          {this.props.contestName}
        </div>
      </div>
    );
  }
}

ContestPreview.propTypes = {
  categoryName: propTypes.string.isRequired,
  contestName: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired,
  id: propTypes.number.isRequired
};

export default ContestPreview;