import React, { useEffect, useState } from 'react';
import AddTaskForm from '../components/AddTaskForm';
import TaskItem from '../components/TaskItem';
import Header from './Header';




function Home() {
  const [valittuKategoria, setValittuKategoria] = useState('Kaikki');
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Tee ruokaa', tehty: false, kategoria: 'Koti' }
  ]);
  const [editTaskId, setEditTaskId] = useState(null);
  const [editText, setEditText] = useState('');

  const lisaaTehtava = (uusi) => {
    setTasks([...tasks, uusi]);
  };

  const toggleTehty = (id) => {
    setTasks(tasks.map(t =>
      t.id === id ? { ...t, tehty: !t.tehty } : t
    ));
  };

  const poistaTehtava = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const handleEdit = (id, text) => {
    setEditTaskId(id);
    setEditText(text);
  };

  const handleSave = () => {
    setTasks(tasks.map(task =>
      task.id === editTaskId ? { ...task, text: editText } : task
    ));
    setEditTaskId(null);
    setEditText('');
  };


  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Header />

      <div className="bg-Pinkki text-white p-4 rounded mb-6">
        Pinkki
      </div>

      <h1 className="text-3xl font-bold mb-4">📝 Tehtävälista</h1>

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

      <AddTaskForm onAdd={lisaaTehtava} />

      <ul className="space-y-2">
        {tasks
          .filter(t => valittuKategoria === 'Kaikki' || t.kategoria === valittuKategoria)
          .map((t) => (
            <li key={t.id}>
              {editTaskId === t.id ? (
                <>
                  <input
                    value={editText}
                    onChange={e => setEditText(e.target.value)}
                    className="border p-1 rounded"
                  />
                  <button onClick={handleSave} className="ml-2 bg-green-500 text-white px-2 py-1 rounded">Tallenna</button>
                </>
              ) : (
                <TaskItem
                  tehtava={t}
                  onToggleDone={toggleTehty}
                  onPoista={poistaTehtava}
                  onEdit={handleEdit}
                />
              )}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Home;
