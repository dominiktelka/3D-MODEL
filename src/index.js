import React from 'react';
import ReactDOM, {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App/>);

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<App />);