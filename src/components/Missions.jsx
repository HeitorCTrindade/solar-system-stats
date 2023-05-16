import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    const missionsCardsComponents = missions.map((mission) => (
      <MissionCard
        className="div-mission"
        key={ mission.name }
        name={ mission.name }
        year={ mission.year }
        country={ mission.country }
        destination={ mission.destination }
      />
    ));
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <div className="div-missions">
          { missionsCardsComponents }
        </div>
      </div>
    );
  }
}

export default Missions;
