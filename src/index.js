import App from './App';
import { HashRouter } from "react-router-dom";

import * as React from "react";
import { createRoot } from "react-dom/client";


const root = createRoot(document.getElementById("root"));

root.render(
    <HashRouter>
       <App/>
    </HashRouter>
);