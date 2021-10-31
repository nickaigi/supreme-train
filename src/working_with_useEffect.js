import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Checkbox(props){
    const [checked, setChecked] = useState(true);
    alert(`checked: ${checked.toString()}`);
    return (
        <>
            <input
                type='checkbox'
                value={checked}
                onChange={() =>
                    setChecked(checked => !checked )}
            />
            {checked ? 'checked' : 'not checked'}
        </>
    )
}

ReactDOM.render(
    <Checkbox />,
    document.getElementById('root')
);
