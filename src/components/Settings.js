import React, { useState } from 'react';

const Settings = ({ darkMode, setDarkMode }) => {
  const [username, setUsername] = useState(
    () => localStorage.getItem('username') || 'Käyttäjä'
  );

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    localStorage.setItem('username', e.target.value);
  };

  const handleCopyInvite = () => {
    const inviteUrl = `${window.location.origin}/join/abc123`;
    navigator.clipboard.writeText(inviteUrl)
      .then(() => alert("Kutsulinkki kopioitu!"))
      .catch(() => alert("Kopiointi epäonnistui"));
  };

  const resetApp = () => {
    if (window.confirm("Haluatko varmasti poistaa kaikki tehtävät ja nollata sovelluksen?")) {
      localStorage.clear();
      window.location.reload();
    }
  };

  return (
    <div className="p-6 space-y-6 bg-PastelliLila min-h-screen">
      <h1 className="text-2xl font-bold text-black">⚙️ Asetukset</h1>

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
          value={username}
          onChange={handleUsernameChange}
          className="p-2 rounded border border-gray-400"
        />
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
