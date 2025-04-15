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
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <ErrorBoundary>
      <Router>
        <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/settings" element={<Settings darkMode={darkMode} setDarkMode={setDarkMode} />} />
            <Route path="/tags" element={<Tags />} />
          </Routes>
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;