import React, { useState } from "react";
import TaskCreate from "./TaskCreate";

function TaskShow({ task, onDelete, onUpdate }) {
  const [showEdit, setShowEdit] = useState(false); /* deger baslangicta false */

  const handleDeleteClick = () => {
    onDelete(task.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit); /* click islemiyle deger True */
  };

  const handleSubmit = (id,updatedTitle,updatedTaskDesc) => {
    setShowEdit(false)
    onUpdate(id,updatedTitle,updatedTaskDesc)
  }
  return (
    <div className="task-details">
      {/* showedit true ise <></> degilse bu */}
      {showEdit ? (
        <TaskCreate task={task} taskformUpdate={true} onUpdate={handleSubmit}/>
      ) : (
        <div>
          <h3>Ditt uppdrag</h3>
          <p>{task.title}</p>
          <h3>Details</h3>
          <p>{task.taskDesc}</p>
          <div className="task-buttons">
            <button className="btn task-delete" onClick={handleDeleteClick}>
              Delete
            </button>
            <button className="btn task-update" onClick={handleEditClick}>
              Update
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskShow;
