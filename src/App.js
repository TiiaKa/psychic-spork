import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Settings from './components/Settings';
import Tags from './components/Tags';
import Header from './components/Header';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem('darkMode') === 'true'
  );

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    document.body.className = darkMode ? 'dark' : '';
  }, [darkMode]);

  return (
    <ErrorBoundary>
      <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
        {/* Dark mode toggle */}
        <div className="p-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500 transition"
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>

        {/* App content via router */}
        <Router>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/tags" element={<Tags />} />
          </Routes>
        </Router>
      </div>
    </ErrorBoundary>
  );
}

export default App;
