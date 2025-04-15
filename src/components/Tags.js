import React from 'react';

const Tags = ({ tags, selectedTag, onSelectTag }) => {
  return (
    <div className="mb-4">
      <h4 className="text-lg font-semibold mb-2">🏷️ Tunnisteet</h4>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <button
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
          </button>
        )}
      </div>
    </div>
  );
};

export default Tags;
