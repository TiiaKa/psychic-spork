import React from 'react';

// yksittäinen tehtäväkortti, näyttää tehtävän nimen, kategorian, deadlinen ja tunnisteet.
const TaskItem = ({ tehtava, onToggleDone, onPoista, onEdit }) => {
  return (
    <div className="bg-PastelliKeltainen shadow rounded p-4 flex justify-between items-start">
      <div className="flex-1">
        <h3 className={`font-semibold ${tehtava.tehty ? 'line-through text-gray-400' : 'text-black'}`}>
          {tehtava.nimi}
        </h3>
        <p className="text-sm text-gray-700 mb-1">
          {tehtava.kategoria} • {tehtava.deadline || 'Ei deadlinea'}
        </p>
        {tehtava.tags?.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {tehtava.tags.map((tag, idx) => (
              <span
                key={idx}
                className="bg-yellow-300 text-black text-xs px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className="flex flex-col gap-2 items-end">
      <button
  onClick={() => onToggleDone(tehtava.id)}
  title="Merkitse tehdyksi" //käyttäjä voi merkitä tehtävän tehdyksi, muokata sen nimeä tai poistaa sen.
>
  {tehtava.tehty ? '✅' : '☐'}
</button>
        <button onClick={() => onEdit(tehtava.id, tehtava.nimi)} className="text-blue-500 text-sm hover:underline">
          Muokkaa
        </button>
        <button onClick={() => onPoista(tehtava.id)} className="text-red-500 text-sm hover:underline">
          🗑️
        </button>
      </div>
    </div>
  );
};

export default TaskItem;