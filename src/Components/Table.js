import React from 'react';
import ButtonFunction from './ButtonFunction';
import ButtonClass from './ButtonClass';

const Table= ({ tableData, handleEditRow, handleRemoveRow }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Index</th>
          <th>Row Data</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((row, index) => (
          <tr key={row.id}>
            <td>{index}</td>
            <td>{row.data}</td>
            <td>
              <ButtonFunction label="Edit" onClick={() => handleEditRow(row.id)} />
              <ButtonClass label="Remove" onClick={() => handleRemoveRow(row.id)} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
