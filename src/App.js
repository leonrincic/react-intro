import React, { useState } from 'react';
import PlayerTable from './Components/PlayerTable';
import axios from 'axios';
import PlayerForm from './Components/PlayerForm';
import PlayerDetails from './Components/PlayerDetails';
import ButtonClass from './Components/ButtonClass';
const App = () => {
  const [players, setPlayers] = useState([]);
  const [playerId, setPlayerId] = useState('');
  const [playerById, setPlayerById] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://localhost:44345/api/player'); // Replace '/api/players' with the actual endpoint URL for fetching players from your C# backend.
      setPlayers(response.data.Items);
    } catch (error) {
      console.error('Error fetching players:', error);
    }
  };

  const fetchPlayerById = async () => {
    try {
      const response = await axios.get(`https://localhost:44345/api/player/${playerId}`);
      setPlayerById(response.data);
    } catch (error) {
      console.error('Error fetching player by ID:', error);
    }
  };

  

  return (
    <div>
      <h1>Player List</h1>  
      <ButtonClass label="Fetch Players" onClick={fetchData} />
      <PlayerTable players={players} />
      <PlayerForm playerId={playerId} setPlayerId={setPlayerId} fetchPlayerById={fetchPlayerById} />
      <ButtonClass label="Get by ID" onClick={fetchPlayerById} />
      <PlayerDetails playerById={playerById} />
    </div>
  );
};

export default App;
