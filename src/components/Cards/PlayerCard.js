import React from 'react';
import AppModal from '../AppModal';
import PlayerForm from '../Forms';

export default function PlayerCard({ playerData, deletePlayer, onUpdate }) {
  return (
    <div className='card m-2 grow'>
      <h3 className='card-title grow m-0'>{playerData.name}</h3>
        <div
          className='img-container card-body'
          style={{ backgroundImage: `url(${playerData.imageUrl})` }}
        >
        </div>
      <h4 className='card-text'>Position: <h3>{playerData.position}</h3></h4>
      <AppModal className="card-buttons" buttonLabel={'Edit Player'} btnColor={'info'} title={'Edit Player'}>
        <PlayerForm player={playerData} onUpdate={onUpdate} />
      </AppModal>
      <button
        onClick={() => {
          deletePlayer(playerData.firebaseKey);
        }}
        className='btn btn-danger delete-board card-buttons'
      >
        <i className='far fa-trash-alt'></i> Delete Player
      </button>
    </div>
  );
}
