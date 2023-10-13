 
import './App.css';
import React from "react" ;

import ColorPicker from './components/ColorPicker';

function App() {
  return (
    <div className='outerCont'>
      <h2>Color Picker </h2>
    <div className='innerCont'>
       <ColorPicker colors={["red", "orange", "yellow", "green", "blue", "purple", "pink", "brown", "black", "gray",]} />
    </div>
    </div>
  );
}

export default App;
