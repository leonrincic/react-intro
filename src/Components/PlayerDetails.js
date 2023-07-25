import React from 'react';

const PlayerDetails = ({ playerById }) => {
  return (
    <div>
      {playerById && (
        <div>
          <h3>Player Details by ID</h3>
          <p>ID: {playerById.Id}</p>
          <p>First Name: {playerById.FirstName}</p>
          <p>Last Name: {playerById.LastName}</p>
          <img
            src={playerById.Image}
            alt={`${playerById.FirstName} ${playerById.LastName}`}
            style={{ width: '50px' }}
          />
          <p>Date of Birth: {playerById.DoB}</p>
        </div>
      )}
    </div>
  );
};

export default PlayerDetails;
