import { useState } from 'react';
import TodoItem from './TodoItem';
import './App.css'; 

function TodoList() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Create a react project',
            completed: false,
        },
        {
            id: 2,
            text: 'Learn React',
            completed: false,
        },
        {
            id: 3,
            text: 'Create a Todo App',
            completed: false,

        }
    ]);

    const [text, setText] = useState('');
    
    function addTask(text) {
        if (text.trim() === '') return;
        
        const now = new Date();
        const timestamp = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + 
                         ', ' + now.toLocaleDateString();
        
        const newTask = {
            id: Date.now(),
            text,
            completed: false,
            timestamp: timestamp
        };
        setTasks([...tasks, newTask]);
        setText('');
    }
    
    function deleteTask(id) {
        setTasks(tasks.filter(task => task.id !== id));
    }
    
    function toggleCompleted(id) {
        setTasks(tasks.map(task => {
            if (task.id === id) {
                return { ...task, completed: !task.completed };
            } else {
                return task;
            }
        }));
    }
    
    return (
        <div className="todo-container">
            <h1># TODO LIST</h1>
            
            <div className="add-task-section">
                <h2>## Add Task</h2>
                <div className="input-group">
                    <input
                        value={text}
                        onChange={e => setText(e.target.value)}
                        placeholder="Enter new task..."
                        onKeyPress={e => e.key === 'Enter' && addTask(text)}
                    />
                    <button onClick={() => addTask(text)}>Add</button>
                </div>
            </div>
            
            <div className="tasks-list">
                {tasks.map(task => (
                    <TodoItem
                        key={task.id}
                        task={task}
                        deleteTask={deleteTask}
                        toggleCompleted={toggleCompleted} 
                    />
                ))}
            </div>
        </div>
    );
}

export default TodoList;