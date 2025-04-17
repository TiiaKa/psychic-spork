import React, { useState, useEffect } from 'react';
import AddTaskForm from '../components/AddTaskForm';
import TaskItem from '../components/TaskItem';
import Tags from '../components/Tags';

function Home({ tasks, setTasks, editTaskId, setEditTaskId, editText, setEditText }) {
  const [valittuKategoria, setValittuKategoria] = useState('Kaikki');
  const [selectedTag, setSelectedTag] = useState(null);
  const backendUrl = process.env.REACT_APP_BACKEND_URL;

  // Haetaan tehtävät backendistä kun komponentti latautuu
  useEffect(() => {
    fetch(`${backendUrl}/api/tehtavat`)
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((err) => console.error("Virhe ladatessa tehtäviä:", err));
  }, [setTasks, backendUrl]);

  const handleAddTask = (uusiTehtava) => {
    const { id, ...data } = uusiTehtava;

    fetch(`${backendUrl}/api/tehtavat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((savedTask) => setTasks((prev) => [...prev, savedTask]))
      .catch((err) => console.error("Tehtävän lisäys epäonnistui:", err));
  };

  const deleteTask = (id) => {
    fetch(`${backendUrl}/api/tehtavat/${id}`, { method: 'DELETE' })
      .then(() => setTasks((prev) => prev.filter((t) => t.id !== id)))
      .catch((err) => console.error("Poisto epäonnistui:", err));
  };

  const updateTask = (id, updatedText, tehty) => {
    const taskToUpdate = tasks.find((t) => t.id === id);
    if (!taskToUpdate) return;

    const updated = {
      ...taskToUpdate,
      nimi: updatedText,
      tehty,
    };

    fetch(`${backendUrl}/api/tehtavat/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updated),
    })
      .then((res) => res.json())
      .then((updatedTask) => {
        setTasks((prev) =>
          prev.map((t) => (t.id === id ? updatedTask : t))
        );
        setEditTaskId(null);
        setEditText('');
      })
      .catch((err) => console.error("Päivitys epäonnistui:", err));
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

      <AddTaskForm onAdd={handleAddTask} />

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
                    onClick={() => updateTask(t.id, editText, t.tehty)}
                    className="ml-2 bg-PastelliSininen text-black px-4 py-2 rounded hover:bg-PastelliVioletti"
                  >
                    Tallenna
                  </button>
                </>
              ) : (
                <TaskItem
                  tehtava={t}
                  onToggleDone={() => updateTask(t.id, t.nimi, !t.tehty)}
                  onPoista={deleteTask}
                  onEdit={() => {
                    setEditTaskId(t.id);
                    setEditText(t.nimi);
                  }}
                />
              )}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Home;


