import React , { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddTaskForm from './components/AddTaskForm';
import Header from './components/Header';
import TaskList from './components/TaskList';
import ErrorBoundary from './components/ErrorBoundary';

function App() {

 const [valittuKategoria, setValittuKategoria] = useState('Kaikki');

 const [tasks, setTasks] = useState([{ id: 1, text: 'Tee ruokaa' }])
 const [editTaskId, setEditTaskId] = useState(null)
 const [editText, setEditText] = useState('')


 const [darkMode, setDarkMode] = useState(
      () => localStorage.getItem('darkMode') === 'true'
    );

    useEffect(() => {
      localStorage.setItem('darkMode', darkMode)
      document.body.className = darkMode ? 'dark' : ''
    }, [darkMode]);

    const lisaaTehtava = (uusi) => {
      setTehtavat([...tehtavat, uusi]);
    };

    const handleEdit = (id, text) => {
      setEditTaskId(id)
      setEditText(text)
     }
   
    const handleSave = () => {
      setTasks(tasks.map(task =>
        task.id === editTaskId ? { ...task, text: editText } : task
      ))
      setEditTaskId(null)
      setEditText('')
    };

  return (
    <>
    {/* Pinkki laatikko */}

    <div>
      {tasks.map(task => (
        <div key={task.id}>
          {editTaskId === task.id ? (
            <>
              <input
                value={editText}
                onChange={e => setEditText(e.target.value)}
              />
              <button onClick={handleSave}>Tallenna</button>
            </>
          ) : (
            <>
              <span>{task.text}</span>
              <button onClick={() => handleEdit(task.id, task.text)}>Muokkaa</button>
            </>
          )}
        </div>
      ))}
    </div>

    <div>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      <h1>Tehtävälista</h1>
    </div>
    <div className="bg-Pinkki text-white p-4 rounded mb-6">
      Tämä on oma pinkki
    </div>
    <select
  value={valittuKategoria}
  onChange={(e) => setValittuKategoria(e.target.value)}
  className="w-full p-2 border rounded mb-4 bg-white text-black dark:bg-gray-900 dark:text-white"
>
  <option value="Kaikki">Kaikki</option>
  <option value="Työ">Työ</option>
  <option value="Koulu">Koulu</option>
  <option value="Koti">Koti</option>
  <option value="Vapaa-aika">Vapaa-aika</option>
</select>
    <Header />
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-4">📝 Tehtävälista</h1>

      <AddTaskForm onAdd={lisaaTehtava} />

      <ul className="space-y-2">
          
           {tehtavat
             .filter(t => valittuKategoria === 'Kaikki' || t.kategoria === valittuKategoria)
             .map((t) => (
               <li key={t.id}>
                 <TaskItem tehtava={t} onToggleDone={toggleTehty} onPoista={poistaTehtava} />
               </li>
            ))}

      </ul>
    </div>
  

    </>
  );
}

export default App;

