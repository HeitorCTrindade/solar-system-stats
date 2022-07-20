import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    const planetsComponent = planets.map((planet, key) => (
      <PlanetCard key={ key } planetName={ planet.name } planetImage={ planet.image } />
    ));
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        { planetsComponent }
      </div>
    );
  }
}

export default SolarSystem;
