import React from "react";
import { CgClose, CgInfo } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

import './task.scss';

const Task = ({ tasks, handleTaskClick, handleTaskDeletion }) => {
  const navigate = useNavigate();

  const handleTaskDetailsClick = () => {
    navigate(`/${tasks.title}`);
  }

  return (
    <div
      className="task-container"
      style={tasks.completed ? {borderLeft: '6px solid chartreuse'} : {}}
    >
      <div 
        className="task-title"
        onClick={() => handleTaskClick(tasks.id)}
      >
        {tasks.title}
      </div>

      <div className="btn-container">
        <button 
          className="remove-task-btn"
          onClick={() => handleTaskDeletion(tasks.id)}
        >
          <CgClose />
        </button>

        <button 
          className="see-task-details-btn"
          onClick={handleTaskDetailsClick}
        >
          <CgInfo />
        </button>
      </div>
    </div>
  )
}

export default Task;