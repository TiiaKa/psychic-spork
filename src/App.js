import React , { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddTaskForm from './components/AddTaskForm';
import Header from './components/Header';
import TaskList from './components/TaskList';

function App() {
  const [tehtavat, setTehtavat] = useState([]);

  const lisaaTehtava = (uusi) => {
    setTehtavat([...tehtavat, uusi]);
  };

  return (
    <>
    {/* Pinkki laatikko */}
    <div className="bg-Pinkki text-white p-4 rounded mb-6">
      Tämä on oma pinkki
    </div>
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-4">📝 Tehtävälista</h1>

      <AddTaskForm onAdd={lisaaTehtava} />

      <ul className="space-y-2">
        {tehtavat.map((t) => (
          <li key={t.id} className="bg-white p-3 rounded shadow">
            <strong>{t.nimi}</strong> – {t.kategoria} – {t.deadline || 'Ei deadlinea'}
          </li>
        ))}
      </ul>
    </div>
  

    </>
  );
}

export default App;

