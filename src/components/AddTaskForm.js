import React, { useState } from 'react';


// lomake uusien tehtävien lisäämiseen

const AddTaskForm = ({ onAdd }) => {
  const [nimi, setNimi] = useState('');
  const [kategoria, setKategoria] = useState('Työ');
  const [deadline, setDeadline] = useState('');
  const [tags, setTags] = useState('');
//käyttäjä syöttää nimen, kategorian, deadline-päivämäärän ja mahdolliset tunnisteet
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nimi) return;

    const uusiTehtava = {
      nimi,
      kategoria,
      deadline,
      tehty: false,
      tags: tags.split(',').map(tag => tag.trim()).filter(Boolean),
    };
// kun lomake lähetetään, onAdd-funktio kutsutaan uudella tehtävällä
    onAdd(uusiTehtava);
    setNimi('');
    setKategoria('Työ');
    setDeadline('');
    setTags('');
  };

  //tehtävän luominen:
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
        <option value="Muu">Muu</option>
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
