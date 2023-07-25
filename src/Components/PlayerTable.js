import React from 'react';

const PlayerTable = ({ players }) => {
    console.log(players);
  return (
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Image</th>
          <th>Date of Birth</th>
        </tr>
      </thead>
      <tbody>
        {players.map((player) => (
          <tr key={player.Id}>
            <td>{player.FirstName}</td>
            <td>{player.LastName}</td>
            <td>
              <img src={player.Image} alt={`${player.FirstName} ${player.LastName}`} style={{ width: '50px' }} />
            </td>
            <td>{player.DoB}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PlayerTable;
