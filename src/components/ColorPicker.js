import React, { useState } from 'react';
import "../components/style.css" ; 


function ColorPicker({ colors =[] }) {

    console.log(colors) ;
   
  const [isOpen, setIsOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

  const toggleColorList = () => {
    setIsOpen(!isOpen);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setIsOpen(false);
  };
  const buttonStyle = {
    backgroundColor: selectedColor || 'transparent',
    color: selectedColor ? 'white' : 'black',
  } ;

  return (
    <div  id='container'>
      <button id='button' onClick={toggleColorList} style={buttonStyle} >Pick a color</button>
     { console.log('isOpen:', isOpen) }
      {isOpen && (
        <div className="color-list">
          {colors.map((color, index) => (
            <div
              key={index}
              className="color-item"
              style={{ backgroundColor: color }}
              onClick={() => handleColorClick(color)}
            ></div>
          ))}
        </div>
      )}
      
    </div>
  );
}

export default ColorPicker;
