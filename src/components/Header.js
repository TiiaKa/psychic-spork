import React from 'react';

const Header = () => {
  return (
    <div className="bg-Pinkki text-white px-6 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold">🧠 psychic-spork</h1>
      <div>
        <button className="mr-2">🔔</button>
        <button>⚙️</button>
      </div>
    </div>

  );
};

export default Header;
