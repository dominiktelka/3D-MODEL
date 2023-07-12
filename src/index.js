// import './index.css';
import App from './App';
// import * as React from "react";
// import * as ReactDOM from "react-dom";
// import { HashRouter } from "react-router-dom";

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App/>);
//
// const domNode = document.getElementById('root');
// const root = createRoot(domNode);
// root.render(<App />);

import { HashRouter } from "react-router-dom";

import * as React from "react";
import { createRoot } from "react-dom/client";


const root = createRoot(document.getElementById("root"));

root.render(
    <HashRouter>
       <App/>
    </HashRouter>
);