import React, { Component } from 'react';
import { getPlayers } from '../../helpers/data/playerData';
import PlayerCard from '../Cards/PlayerCard';

export default class FullTeam extends Component {
  state = {
    players: [],
  };

  componentDidMount() {
    this.getThePlayers();
  }

  getThePlayers = () => {
    getPlayers().then((response) => {
      this.setState({
        players: response,
      });
    });
  };

  render() {
    const { players } = this.state;

    return (
        <>
        <h1>Nashville Predators Roster</h1>
        <div className="d-flex flex-wrap justify-content-center">
            {players.map((player) => <PlayerCard playerData={player}/>)}
        </div>
        </>
    );
  }
}
