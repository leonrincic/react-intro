import React from 'react';


const GetPlayerForm = ({ playerId, setPlayerId }) => {
  return (
    <div>
      <h2>Get Player by ID</h2>
      <input
        type="text"
        value={playerId}
        onChange={(e) => setPlayerId(e.target.value)}
        placeholder="Enter Player ID"
      />

    </div>
  );
};

export default GetPlayerForm;
