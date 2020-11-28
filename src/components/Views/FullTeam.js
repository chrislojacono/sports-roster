import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { getPlayers, deletePlayer } from '../../helpers/data/playerData';
import PlayerCard from '../Cards/PlayerCard';
import AppModal from '../AppModal';
import PlayerForm from '../Forms';
import predslogo from './logo2.jpeg';

export default class FullTeam extends Component {
  state = {
    players: [],
  };

  componentDidMount() {
    this.getThePlayers();
  }

  logMeOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  };

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
  };

  render() {
    const { players } = this.state;

    return (
      <>
        <div className='btn btn-outline-danger logout' onClick={(e) => this.logMeOut(e)}>
          Logout
        </div>
        <h1 className='predsHeader'>Nashville Predators Roster</h1>
        <img className='logoHeader' src={predslogo} alt='preds logo'></img>
        <div className='m-3'>
          <AppModal
            btnColor={'success'}
            title={'Add Player'}
            buttonLabel={'Add Player'}
          >
            <PlayerForm onUpdate={this.getThePlayers} />
          </AppModal>
        </div>
        <div className='d-flex flex-wrap justify-content-center'>
          {players.map((player) => (
            <PlayerCard
              playerData={player}
              key={player.firebaseKey}
              onUpdate={this.getThePlayers}
              deletePlayer={this.deletePlayer}
            />
          ))}
        </div>
      </>
    );
  }
}
