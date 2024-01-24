import React from 'react';
import './Tooltip.css';

const Tooltip = ({ position, content }) => (
  <div className={`tooltip ${position}`}>
    {content}
  </div>
);

export default Tooltip;
