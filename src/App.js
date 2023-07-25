import React, { useState, useEffect } from 'react';
import Form from './Components/Form';
import Table from './Components/Table';

const App = () => {
  const [data, setData] = useState('');

  const [tableData, setTableData] = useState([]);
  const [currentRow, setCurrentRow] = useState({ id: null, data: '' });

  const [updateIndex, setUpdateIndex] = useState(null);
  const [updateName, setUpdateName] = useState('');

  useEffect(() => {
    const savedTableData = localStorage.getItem('tableData');
    if (savedTableData) {
      setTableData(JSON.parse(savedTableData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tableData', JSON.stringify(tableData));
  }, [tableData]);

  const handleAddRow = () => {
    if (data.trim() !== '') {
      setTableData([...tableData, { id: Date.now(), data }]);
      setData('');
    }
  };

  const handleEditRow = (id) => {
    const rowToEdit = tableData.find((row) => row.id === id);
    if (rowToEdit) {
      setCurrentRow({ id, data: rowToEdit.data });
      setUpdateIndex(tableData.findIndex((row) => row.id === id));
      setUpdateName(rowToEdit.data);
    }
  };

  const handleRemoveRow = (id) => {
    setTableData(tableData.filter((row) => row.id !== id));
  };

  const handleUpdateFormSubmit = (event) => {
    event.preventDefault();
    if (updateIndex !== null && updateName.trim() !== '') {
      setTableData((prevTableData) =>
        prevTableData.map((row, index) =>
          index === updateIndex ? { ...row, data: updateName } : row
        )
      );
      setUpdateIndex(null);
      setUpdateName('');
    }
  };

  const handleUpdateIndexChange = (event) => {
    const newIndex = parseInt(event.target.value, 10);
    setUpdateIndex(isNaN(newIndex) ? null : newIndex);
  };

  const handleUpdateNameChange = (event) => {
    setUpdateName(event.target.value);
  };

  return (
    <div>
      <h1>Local Storage App</h1>
      <Form
        data={data}
        setData={setData}
        handleAddRow={handleAddRow}
        currentRow={currentRow}
        handleUpdateFormSubmit={handleUpdateFormSubmit}
        updateIndex={updateIndex}
        handleUpdateIndexChange={handleUpdateIndexChange}
        updateName={updateName}
        handleUpdateNameChange={handleUpdateNameChange}
        setCurrentRow={setCurrentRow}
      />
      <Table tableData={tableData} handleEditRow={handleEditRow} handleRemoveRow={handleRemoveRow} />
    </div>
  );
};

export default App;
