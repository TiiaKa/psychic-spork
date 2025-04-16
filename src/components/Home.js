import React, { useState } from 'react';
import AddTaskForm from '../components/AddTaskForm';
import TaskItem from '../components/TaskItem';
import Tags from '../components/Tags';

function Home({ tasks, setTasks, editTaskId, setEditTaskId, editText, setEditText }) {
  const [valittuKategoria, setValittuKategoria] = useState('Kaikki');
  const [selectedTag, setSelectedTag] = useState(null);

  const lisaaTehtava = (uusi) => setTasks([...tasks, uusi]);

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
      task.id === editTaskId ? { ...task, nimi: editText } : task
    ));
    setEditTaskId(null);
    setEditText('');
  };

  return (
<div className="min-h-screen bg-PastelliVaaleanpunainen dark:bg-gray-800 p-8 text-black dark:text-white">
<h1 className="text-3xl font-bold mb-4 dark:text-white">📝 Tehtävälista</h1>

      <select
        value={valittuKategoria}
        onChange={(e) => setValittuKategoria(e.target.value)}
        className="w-full p-2 border rounded mb-4 bg-white text-black"
      >
        <option value="Kaikki">Kaikki</option>
        <option value="Työ">Työ</option>
        <option value="Koulu">Koulu</option>
        <option value="Koti">Koti</option>
        <option value="Vapaa-aika">Vapaa-aika</option>
        <option value="Muu">Muu</option>
      </select>

      <Tags
        tags={[...new Set(tasks.flatMap(t => t.tags || []))]}
        selectedTag={selectedTag}
        onSelectTag={setSelectedTag}
      />

      <AddTaskForm onAdd={lisaaTehtava} />

      <ul className="space-y-2">
        {tasks
          .filter(t =>
            (valittuKategoria === 'Kaikki' || t.kategoria === valittuKategoria) &&
            (!selectedTag || (t.tags && t.tags.includes(selectedTag)))
          )
          .map((t) => (
            <li key={t.id}>
              {editTaskId === t.id ? (
                <>
                  <input
                    value={editText}
                    onChange={e => setEditText(e.target.value)}
                    className="border p-2 rounded"
                  />
                  <button
  onClick={() => {
    setEditTaskId(null);
    setEditText('');
  }}
  className="ml-2 bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
>
  Peruuta
</button>
                  <button
                    onClick={handleSave}
                    className="ml-2 bg-PastelliSininen text-black px-4 py-2 rounded hover:bg-PastelliVioletti"
                  >
                    Tallenna
                  </button>
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

