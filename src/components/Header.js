
import { Link } from 'react-router-dom';



const Header = ({ username, darkMode, setDarkMode }) => {
  return (
    <div className="bg-PastelliLila text-black dark:bg-gray-900 dark:text-white px-6 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold font-serif">To-Do -app</h1>
      <div className="flex items-center gap-6">
        <nav className="flex gap-4 text-sm">
          <Link to="/" className="hover:underline">Koti</Link>
          <Link to="/settings" className="hover:underline">Asetukset</Link>
        </nav>
        <div className="text-sm font-semibold text-indigo-800 dark:text-indigo-300">
          Hei, <span className="font-bold">{username}</span>!
        </div>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="text-sm border px-3 py-1 rounded bg-white dark:bg-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          {darkMode ? '🌞 Vaalea tila' : '🌙 Tumma tila'}
        </button>
      </div>
    </div>
  );
};

export default Header;
