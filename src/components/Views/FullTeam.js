import React, { Component } from 'react';
import { getPlayers, deletePlayer } from '../../helpers/data/playerData';
import PlayerCard from '../Cards/PlayerCard';
import AppModal from '../AppModal';
import PlayerForm from '../Forms';

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

  deletePlayer = (firebaseKey) => {
    deletePlayer(firebaseKey).then(() => {
      this.getThePlayers();
    });
  }

  render() {
    const { players } = this.state;

    return (
        <>
        <h1>Nashville Predators Roster</h1>
        <AppModal title={'Add Player'} buttonLabel={'Add Player'}>
            <PlayerForm onUpdate={this.getThePlayers}/>
        </AppModal>
        <div className="d-flex flex-wrap justify-content-center">
            {players.map((player) => <PlayerCard playerData={player} onUpdate={this.getThePlayers} deletePlayer={this.deletePlayer}/>)}
        </div>
        </>
    );
  }
}
