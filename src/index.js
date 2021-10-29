import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

function Lake({name}){
    return (
        <h1>{name}</h1>
    )
}

function App(){
    return (
        <div>
            <Lake name='Lake Nakuru' />
            <Lake name='Lake Naivasha' />
            <Lake name='Lake Turkana' />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

reportWebVitals();
