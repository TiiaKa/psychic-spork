import React from 'react';

const TaskItem = ({ tehtava, onToggleDone, onPoista }) => {
  return (
    <div className="bg-white shadow rounded p-4 flex justify-between items-center">
      <div>
        <h3 className={`font-semibold ${tehtava.tehty ? 'line-through text-gray-400' : ''}`}>
          {tehtava.nimi}
        </h3>
        <p className="text-sm text-gray-600">
          {tehtava.kategoria} • {tehtava.deadline || 'Ei deadlinea'}
        </p>
      </div>
      <div className="flex items-center space-x-3">
        <button onClick={() => onToggleDone(tehtava.id)}>
          {tehtava.tehty ? '✅' : '⬜'}
        </button>
        <button onClick={() => onPoista(tehtava.id)} className="text-red-500">🗑️</button>
      </div>
    </div>
  );
};

export default TaskItem;
