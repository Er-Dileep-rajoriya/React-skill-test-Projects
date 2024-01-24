import React, { useState } from 'react';
import './App.css';
import ToolTipForm from './Components/HoverForm/toolTipForm';
import HoverButton from './Components/HoverButton/hoverButton';

function App() {
  // Define state using useState hook
  const [tooltip, setTooltip] = useState({content:'Coding Ninjas', pos:'top', vis: false});


  // handling onchange event when user is typing something..
  function handleContentChange(e) 
  {
    // setting content in tooltip state and everything will be same
    setTooltip({content:e.target.value, pos:tooltip.pos, vis:tooltip.vis});
  }

  // handling onchange event of direction, when user select a direction
  function handleSelectPosition(e) 
  {
    setTooltip({content:tooltip.content, pos:e.target.value, vis:tooltip.vis});
  }
 
  // handling the Mouse Event, when user Enter Mouse in "Hover Over Me" button
  const handleMouseEnter = () => 
  {
    // Marking vis as true and everything will be same
    setTooltip({content:tooltip.content, pos:tooltip.pos, vis:true});
  };

  // handling the Mouse Event, when user Leave "Hover Over Me" button...
  const handleMouseLeave = () => 
  {
    // Marking vis as false and rest of will be same
    setTooltip({content:tooltip.content, pos:tooltip.pos, vis:false});
  };

  return (
    <div className="App">
      {/* Heading of Our App */}
      <h1 className='app-heading'>TOOLTIP APP</h1>

      {/* Separating Tooltip Form in another component and passing required props */}
      <ToolTipForm handleContentChange={handleContentChange} 
          handleSelectPosition={handleSelectPosition} />

      {/* Separating Tooltip Hover button in another component and passing required props */}
      <HoverButton handleMouseEnter={handleMouseEnter} 
          handleMouseLeave={handleMouseLeave} tooltip={tooltip}/>
    </div>
  );
}

export default App;