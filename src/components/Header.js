import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [username, setUsername] = useState(localStorage.getItem('username') || 'Käyttäjä');


  useEffect(() => {
    const handleStorageChange = () => {
      setUsername(localStorage.getItem('username') || 'Käyttäjä');
  };
  window.addEventListener('storage', handleStorageChange);
  return () => window.removeEventListener('storage', handleStorageChange);
}, []);

return (
  <>
    <div className="bg-PastelliLila text-black px-6 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold">📝 To-Do -app</h1>
      <div className="flex items-center gap-6">
        <nav className="flex gap-4 text-sm">
          <Link to="/" className="hover:underline">Koti</Link>
          <Link to="/tags" className="hover:underline">Tunnisteet</Link>
          <Link to="/settings" className="hover:underline">Asetukset</Link>
        </nav>
        <div className="text-sm">Hei, {username}!</div>
      </div>
    </div>
  </>
);
};

export default Header;