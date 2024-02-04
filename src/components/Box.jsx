import React, { useState } from 'react';
import Popup from './PopUp';

function Box() {

    const [showPopup, setShowPopup] = useState(false);
    const [popupContent, setPopupContent] = useState('');

    const handleYesClick = () => {
      setPopupContent('You Sure ??');
      setShowPopup(true);
    };
  
    const handleNoClick = () => {
      setPopupContent('Thank God !');
      setShowPopup(true);
    };

    const handleSure = () => {
        if(showPopup) {
            setShowPopup(true);
        }
        else {
            setShowPopup(false);
        }
    }
 
  return (
    <div className="flex relative flex-col items-center mx-8 text-center justify-center bg-gray-100 p-8 rounded-md shadow-md">
      <h1 className="text-[7vw] md:text-3xl font-bold mb-4">Will You Be My valentine?</h1>
      <div className="flex justify-center space-x-4">
        <button className="bg-secondary text-white px-4 py-2 rounded-md hover:bg-red-700" onClick={handleYesClick}>YES</button>
        <button className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-700" onClick={handleNoClick}>NO</button>
      </div>
      {showPopup && <Popup content={popupContent} onClose={() => setShowPopup(false)} yesSure={handleSure}  />}
    </div>
  );
}

export default Box;
