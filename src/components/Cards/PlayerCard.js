import React from 'react';
import AppModal from '../AppModal';

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
      <AppModal buttonLabel={'Edit Pin'} btnColor={'info'} title={'Edit Pin'}>
        {/* <PinForm pin={playerData} onUpdate={onUpdate} /> */}
        Test
      </AppModal>
      <button
        onClick={() => {
          deletePlayer(playerData.firebaseKey);
        }}
        className='btn btn-dark delete-board board-buttons'
      >
        <i className='far fa-trash-alt'></i> Delete Pin
      </button>
    </div>
  );
}
