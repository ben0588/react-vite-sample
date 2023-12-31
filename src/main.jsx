import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { HashRouter } from 'react-router-dom';
import './style/sass/all.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
    <HashRouter>
        <App />
    </HashRouter>
);
