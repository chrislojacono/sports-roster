import React from 'react';
import AppModal from '../AppModal';
import PlayerForm from '../Forms';

export default function PlayerCard({ playerData, deletePlayer, onUpdate }) {
  return (
    <div className='card m-2 grow'>
      <a href={playerData.website}>
        <div
          className='img-container card-body'
          style={{ backgroundImage: `url(${playerData.imageUrl})` }}
        >
          <h3 className='card-title grow'>{playerData.name}</h3>
        </div>
      </a>

      <p className='card-text'>{playerData.position}</p>
      <AppModal buttonLabel={'Edit Player'} btnColor={'info'} title={'Edit Player'}>
        <PlayerForm player={playerData} onUpdate={onUpdate} />
      </AppModal>
      <button
        onClick={() => {
          deletePlayer(playerData.firebaseKey);
        }}
        className='btn btn-dark delete-board board-buttons'
      >
        <i className='far fa-trash-alt'></i> Delete Player
      </button>
    </div>
  );
}
