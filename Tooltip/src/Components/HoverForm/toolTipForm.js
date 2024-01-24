import './tooltipForm.css';

function ToolTipForm({handleContentChange, handleSelectPosition})
{
    return (
        <div className="form-container">
            <div className="content-container">
                {/* this is for taking input as a content */}
                <input type="text" placeholder="Enter Content as tooltip content...."
                onChange={handleContentChange} />
            </div>
            {/* Buttons for selecting Direction */}
            <div className='position-container'>
                <select onChange={handleSelectPosition}>
                    <option value='top'>Top</option>
                    <option value='right'>Right</option>
                    <option value='bottom'>Bottom</option>
                    <option value='left'>Left</option>
                </select>
            </div>
        </div>

    )
}

export default ToolTipForm;