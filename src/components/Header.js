import React from 'react';

const Header = () => {
  return (
    <div className="bg-indigo-600 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Tehtävälista</h1>
      <button className="text-white">⚙️</button>
    </div>
  );
};

export default Header;
