import React from 'react';
import './Toolbar.css'

const toolbar = (props) => (
    <header className='Toolbar'>
        <div className="wrap">
            <button className = 'button' onClick={props.addNoteHandler}>Add Note</button>
        </div>

        <div className = 'logo'>Simple Post-it</div>
        
        <div className="wrap">
            <button className = 'button'>Logon</button>
        </div>
    </header>
)

export default toolbar;