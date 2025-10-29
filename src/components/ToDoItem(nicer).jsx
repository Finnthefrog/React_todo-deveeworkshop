import React from 'react';
function TodoItem({ task, deleteTask, toggleCompleted }) {
    function handleChange() {
        toggleCompleted(task.id);
    }
    
    return (
        <div className={`todo-item ${task.completed ? 'completed' : ''}`}>
            <div className="task-content">
                <div className="task-main">
                    <input 
                        type="checkbox"
                        checked={task.completed}
                        onChange={handleChange}
                        className="checkbox"
                    />
                    <span className="task-text">- {task.text}</span>
                </div>
                <div className="task-timestamp">
                    {task.timestamp}
                </div>
            </div>
            <button 
                onClick={() => deleteTask(task.id)}
                className="delete-btn"
            >
                X
            </button>
        </div>
    );
}

export default TodoItem;