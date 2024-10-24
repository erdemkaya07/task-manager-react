import React from "react";
import { useState } from "react";

function TaskCreate({onCreate, task, taskformUpdate, onUpdate}) {

  const [title, setTitle] = useState(task ? task.title : '') /* Guncelleme istendiginde veri var ise goster yoksa bos string */
  const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : '')

  const handleChange = (e) => {
    setTitle(e.target.value)
  }

  const handleTaskChange = (e) => {
    setTaskDesc(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(taskformUpdate) {
      onUpdate(task.id, title, taskDesc)
    } else {
      onCreate(title, taskDesc)
    }
    setTitle('') /* submitten sonra input bosalt */
    setTaskDesc('')/* submitten sonra textarea bosalt */
  }

  return (
    <div>{taskformUpdate ? <div className="task-uptade">
      <h3>Add Task</h3>
      <form className="task-form">
        <label className="task-label">Update Title</label>
        <input value={title} onChange={handleChange} type="text" className="task-input"/>
        <label className="task-label">Update Task</label>
        <textarea value={taskDesc} onChange={handleTaskChange} className="task-textarea" rows={5}></textarea>
        <button className="task-button update-buton" onClick={handleSubmit}>Update</button>
      </form>
    </div> : <div className="task-create">
      <h3>Add Task</h3>
      <form className="task-form">
        <label className="task-label">Title</label>
        <input value={title} onChange={handleChange} type="text" className="task-input"/>
        <label className="task-label">Task</label>
        <textarea value={taskDesc} onChange={handleTaskChange} className="task-textarea" rows={5}></textarea>
        <button className="task-button " onClick={handleSubmit}>Create</button>
      </form>
    </div> }</div>
  );
}

export default TaskCreate;
