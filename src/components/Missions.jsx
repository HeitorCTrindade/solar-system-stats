import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title';

class Missions extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div data-testid="missions">
        <Title />
      </div>
    );
  }
}

Missions.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default Missions;
