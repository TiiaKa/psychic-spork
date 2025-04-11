import React from 'react';

const TaskList = () => {
  const tehtavat = [
    { id: 1, nimi: "Kaupassa käynti", kategoria: "Koti", deadline: "2025-04-08", tehty: false },
    { id: 2, nimi: "Palautettava tehtävä", kategoria: "Koulu", deadline: "2025-04-09", tehty: true },
  ];

  return (
    <div className="p-4 space-y-4">
      {tehtavat.map(tehtava => (
        <div key={tehtava.id} className="bg-white shadow rounded p-4 flex justify-between items-center">
          <div>
            <h3 className="font-semibold">{tehtava.nimi}</h3>
            <p className="text-sm text-gray-600">{tehtava.kategoria} • {tehtava.deadline}</p>
          </div>
          <div>{tehtava.tehty ? "✅" : "⬜"}</div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
