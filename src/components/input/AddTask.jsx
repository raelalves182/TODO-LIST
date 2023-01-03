import React, { useState } from 'react';

import Button from '../button/Btn';
import './Addtask.scss';

const AddTask = ({ handleTaskAddition }) => {
  const [inputData, setInputData] = useState('');

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  const handleAddTaskClick = () => {
    handleTaskAddition(inputData);
    setInputData('');
  };

  return (
    <div className='add-task-container '>
      <input
        onChange={handleInputChange}
        value={inputData}
        className='add-task-input' 
        type="text" 
      />

      <div className="add-btn-container">
        <Button onClick={handleAddTaskClick}>Adicionar</Button>
      </div>
    </div>
  )
}

export default AddTask;