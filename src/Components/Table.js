import React, { useEffect, useState } from 'react';
import ButtonFunction from './ButtonFunction';
import axios from 'axios';

const Table = ({ handleEditRow, handleRemoveRow }) => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://localhost:44345/api/players'); // Replace '/api/players' with the actual endpoint URL for fetching players.
      setTableData(response.data);
    } catch (error) {
      console.error('Error fetching players:', error);
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Index</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Image</th>
          {/* Add more columns as needed */}
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((row, index) => (
          <tr key={row.id}>
            <td>{index}</td>
            <td>{row.firstName}</td>
            <td>{row.lastName}</td>
            <td>{row.image}</td>
            {/* Add more columns as needed */}
            <td>
              <ButtonFunction label="Edit" onClick={() => handleEditRow(row.id)} />
              <ButtonFunction label="Remove" onClick={() => handleRemoveRow(row.id)} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
