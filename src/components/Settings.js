import React, { useState, useEffect } from 'react';

const Settings = ({ darkMode, setDarkMode, username, setUsername }) => {
  const [inputValue, setInputValue] = useState(username);
  useEffect(() => {
    setInputValue(username);
  }, [username]);
// Asetussivu, jossa käyttäjä voi muuttaa nimeään ja vaihtaa teeman tummaksi tai vaaleaksi.
  const handleUsernameChange = (e) => setInputValue(e.target.value);

  const handleUsernameSave = () => {
    setUsername(inputValue);
    localStorage.setItem('username', inputValue);
  };

  const handleCopyInvite = () => {
    const inviteUrl = `${window.location.origin}/join/abc123`;
    navigator.clipboard.writeText(inviteUrl)
      .then(() => alert("Kutsulinkki kopioitu!"))
      .catch(() => alert("Kopiointi epäonnistui"));
  };

  const resetApp = () => {
    if (window.confirm("Haluatko varmasti poistaa kaikki tehtävät ja nollata sovelluksen?")) {
      const resetUrl = `${process.env.REACT_APP_BACKEND_URL}/api/tehtavat/reset`;
      console.log("Reset URL:", resetUrl);
  
      fetch(resetUrl, { method: 'POST' })
        .then(() => {
          localStorage.removeItem('username');
          window.location.reload();
        })
        .catch(() => alert("Virhe nollatessa sovellusta."));
    }
  };

  return (
<div className="p-6 space-y-6 bg-PastelliLila dark:bg-gray-800 min-h-screen text-black dark:text-white">
<h1 className="text-2xl font-bold">⚙️ Asetukset</h1>

      <section>
        <h2 className="text-lg font-semibold mb-2 text-black">🎨 Väriteema</h2>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 bg-PastelliVioletti text-black rounded hover:bg-PastelliSininen transition"
        >
          {darkMode ? 'Vaalea tila' : 'Tumma tila'}
        </button>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2 text-black">👨‍👩‍👧‍👦 Jaa perheen kanssa</h2>
        <button onClick={handleCopyInvite} className="px-4 py-2 bg-PastelliVihrea text-black rounded hover:bg-PastelliKeltainen">
          Luo kutsulinkki
        </button>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2 text-black">🧑 Käyttäjänimi</h2>
        <input
          type="text"
          value={inputValue}
          onChange={handleUsernameChange}
          className="p-2 rounded border border-gray-400 bg-white text-black dark:bg-gray-900 dark:text-white"
        />
        <button onClick={handleUsernameSave} className="ml-2 bg-PastelliSininen px-2 py-1 rounded">Tallenna</button>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2 text-black">🗑️ Resetoi sovellus</h2>
        <button
          onClick={resetApp}
          className="px-4 py-2 bg-red-400 text-white rounded hover:bg-red-500"
        >
          Nollaa sovellus
        </button>
      </section>
    </div>
  );
};

export default Settings;
