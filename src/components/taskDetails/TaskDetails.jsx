import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Button from '../button/Btn';
import './TaskDetails.scss';

const TaskDetails = () => {
  const params = useParams();
  const navigate = useNavigate();

  const handleBackBtnClick = () => {
    navigate("/");
  }

  return (
    <>
      <div className="back-btn-container">
        <Button
          onClick={handleBackBtnClick}
        >
          Voltar
        </Button>
      </div>

      <div className="task-details-container">
        <h2>{params.taskTitle}</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos sint minus ducimus non provident perferendis vel tenetur laudantium ipsum suscipit enim fugiat, adipisci quas accusantium quia est dolorem. Obcaecati, dicta?
        </p>
      </div>
    </>
  )
}

export default TaskDetails;