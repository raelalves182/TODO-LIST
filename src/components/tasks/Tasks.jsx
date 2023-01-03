import React from 'react';
import Task from './Task';

const Tasks = ({ tasks, handleTaskClick, handleTaskDeletion }) => {
  return (
    <>
      {tasks.map((tasks) => (
        <Task
          key={tasks.id}
          tasks={tasks} 
          handleTaskClick={handleTaskClick}
          handleTaskDeletion={handleTaskDeletion}
        />
      ))}
    </>
  )
}

export default Tasks;