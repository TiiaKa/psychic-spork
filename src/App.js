import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Settings from './components/Settings';
import Tags from './components/Tags';
import Header from './components/Header';
import ErrorBoundary from './components/ErrorBoundary';

// react ja router-dom sivujen hallintaa. lisäksi tuodaan komponentit omista hakemistoista (home, settings jne.)
function App() {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem('darkMode') === 'true'
  );

  const [username, setUsername] = useState(
    localStorage.getItem('username') || 'Käyttäjä'
  );

  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : [];
  });
//usestate: hallitaan tiloja (darkmode, käyttäjänimi, tehtävät, tehtävän muokkaustila)
  const [editTaskId, setEditTaskId] = useState(null);
  const [editText, setEditText] = useState('');

  useEffect(() => { //useEffectin darkmode tallentaa teeman localstorageen ja vaihtaa css-luokan tummaa tilaa varten
    localStorage.setItem('darkMode', darkMode); //localstorage: säilyttää joitakin näistä tiloista, eli asetukset säilyy selaimen uudelleenkäynnistyksen jälkeen
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]); // tasks tallentaa tehtävälistan localstorageen aina kun tehtävälista muuttuu

  //sovellus hyödyntää router-dom kirjastyoa joka mahdollistaa navigoinnin eri sivujen välillä.
  //errorboundary on virheenhallinta-komponentti johon sovellus on "kääritty"
  //router mahdollistaa reitityksen
  //routes määrittää eri sivujen reitityksen
  return (
    <ErrorBoundary> 
      <Router> 
        <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
        <Header username={username} darkMode={darkMode} setDarkMode={setDarkMode} />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  tasks={tasks}
                  setTasks={setTasks}
                  editTaskId={editTaskId}
                  setEditTaskId={setEditTaskId}
                  editText={editText}
                  setEditText={setEditText}
                />
              }
            />
            <Route
              path="/settings"
              element={
                <Settings
                  darkMode={darkMode}
                  setDarkMode={setDarkMode}
                  username={username}
                  setUsername={setUsername}
                />
              }
            />
            <Route path="/tags" element={<Tags />} />
          </Routes>
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;