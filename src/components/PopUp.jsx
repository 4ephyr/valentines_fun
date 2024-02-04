import React, { useState, useEffect } from 'react';

function Popup({ onClose, yesSure, content }) {

  const [isShaking, setIsShaking] = useState(false);

  useEffect(() => {
    if (isShaking) {
      setTimeout(() => {
        setIsShaking(false);
      }, 500);
    }
  }, [isShaking]);

  return (
    <div className={`bg-gray-400 rounded-md shadow-xl antialiased ${isShaking ? 'animate-shake' : ''} absolute top-0 phone:top-6 bg-opacity-50 border border-primary flex items-center justify-center`}>
      <div className="bg-primary p-8 rounded-md">
        <h2 className="text-2xl font-bold mb-4 text-black z-50">{content}</h2>
        <div className="flex gap-x-4">
          {content === 'You Sure ??' ? (
            <button className="bg-blue-500 text-primary px-4 py-2 rounded-md hover:bg-blue-700" onClick={() => {
              yesSure();
              setIsShaking(true);
            }}>
              Yes
            </button>
          ) : (
            ''
          )}
          <button className="bg-secondary mx-auto text-primary px-4 py-2 rounded-md hover:bg-red-700" onClick={onClose}>
            {content === 'Thank God !' ? 'Close' : 'No'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Popup;
