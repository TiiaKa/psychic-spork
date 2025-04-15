import React, { useState } from 'react';

const AddTaskForm = ({ onAdd }) => {
  const [nimi, setNimi] = useState('');
  const [kategoria, setKategoria] = useState('Työ');
  const [deadline, setDeadline] = useState('');
  const [tags, setTags] = useState('');

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nimi) return;

    const uusiTehtava = {
      id: Date.now(),
      nimi,
      kategoria,
      deadline,
      tehty: false,
      tags: tags.split(',').map(tag => tag.trim()).filter(Boolean),
    };

    onAdd(uusiTehtava);
    setNimi('');
    setKategoria('Työ');
    setDeadline('');
    setTags('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-PastelliSininen p-4 rounded shadow-md mb-6">
      <h2 className="text-xl font-bold mb-2 text-black">➕ Lisää uusi tehtävä</h2>
      <input
        type="text"
        placeholder="Kirjoita tehtävä"
        value={nimi}
        onChange={(e) => setNimi(e.target.value)}
        className="w-full p-2 border rounded mb-2 bg-white text-black"
      />
      <select
        value={kategoria}
        onChange={(e) => setKategoria(e.target.value)}
        className="w-full p-2 border rounded mb-2 bg-white text-black"
      >
        <option value="Työ">Työ</option>
        <option value="Koulu">Koulu</option>
        <option value="Koti">Koti</option>
        <option value="Vapaa-aika">Vapaa-aika</option>
      </select>
      <input
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
        className="w-full p-2 border rounded mb-2 bg-white text-black"
      />
      <input
  type="text"
  placeholder="Lisää tunnisteet, esim. #kauppa, #tärkeä"
  value={tags}
  onChange={(e) => setTags(e.target.value)}
  className="w-full p-2 border rounded mb-4 bg-white text-black"
/>
      <button type="submit" className="bg-Pinkki text-white py-2 px-4 rounded hover:bg-pink-700 transition">
        Tallenna tehtävä
      </button>
    </form>
  );
};

export default AddTaskForm;
