import React from 'react';
import ButtonFunction from './ButtonFunction';

const Form = ({
  data,
  setData,
  handleAddRow,
  currentRow,
  handleUpdateFormSubmit,
  updateIndex,
  handleUpdateIndexChange,
  updateName,
  handleUpdateNameChange,
  setCurrentRow,
}) => {
  return (
    <>
      <input type="text" value={data} onChange={(event) => setData(event.target.value)} />
      <ButtonFunction label="Add Row" onClick={handleAddRow} />

      {currentRow.id !== null && (
        <form onSubmit={handleUpdateFormSubmit}>
          <label>
            Update Index:
            <input
              type="number"
              value={updateIndex !== null ? updateIndex : ''}
              onChange={handleUpdateIndexChange}
            />
          </label>
          <label>
            Update Name:
            <input type="text" value={updateName} onChange={handleUpdateNameChange} />
          </label>
          <ButtonFunction label="Update Row" type="submit" />
          <ButtonFunction label="Cancel" onClick={() => setCurrentRow({ id: null, data: '' })} />
        </form>
      )}
    </>
  );
};

export default Form;
