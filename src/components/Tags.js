import React from 'react';

// komponentti tunnisteiden suodattamiseen, näyttää kaikki käytetyt tunnisteet nappuloina.
const Tags = ({ tags, selectedTag, onSelectTag }) => {
  return (
    <div className="mb-4">
      <h4 className="text-lg font-semibold mb-2">🏷️ Tunnisteet</h4>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <button //// klikkaamalla tunnistetta suodatetaan tehtäviä sen perusteella
            key={index}
            onClick={() => onSelectTag(tag)}
            className={`px-3 py-1 rounded-full border text-sm transition
              ${selectedTag === tag ? 'bg-PastelliVioletti' : 'bg-PastelliKeltainen'}
              hover:bg-PastelliSininen`}
          >
            {tag}
          </button>
        ))}
        {selectedTag && (
          <button
            onClick={() => onSelectTag(null)}
            className="ml-2 text-sm underline text-gray-600"
          > 
            Tyhjennä suodatin
          </button> //// "Tyhjennä"-nappi poistaa tunnistesuodatuksen.
        )}
      </div>
    </div>
  );
};

export default Tags;
