import Tooltip from "../ToolTip/Tooltip";
import './hoverButton.css';

function HoverButton({handleMouseEnter, handleMouseLeave, tooltip})
{
    return (
        <div id="button-container">
            <button
                className="btn hover-btn"
                onMouseOver={handleMouseEnter} // Event is already Handled in Parent Component
                onMouseOut={handleMouseLeave} // Event is already Handled in Parent Component
                >
                Hover Over Me!
            </button>
            {/* Conditional rendering of Tooltip component */}
            {/* Render the Tooltip when hovering is true */}
            {tooltip.vis && <Tooltip position={tooltip.pos} content={tooltip.content}/>} 
        </div>
    )
}

export default HoverButton;