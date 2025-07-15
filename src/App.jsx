import { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, input]);
      setInput('');
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <h1>To-Do Lists</h1>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a task"
      />
      <button onClick={addTask}>Add TODO</button>
      <ul>
        {tasks.map((task, idx) => (
          <li key={idx}>
            {task}
            <button onClick={() => removeTask(idx)}>Deleteeeee</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
