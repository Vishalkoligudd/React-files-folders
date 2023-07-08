import React from "react";
import {createRoot} from 'react-dom/client'
// import App from "./App";
import './global.css'
// import App from "./form/App";
import App from "./food-order-app/App"
// import App1 from "./component/App1";
// import App from "./component2/App";
// import App from "./formhandling/App";


createRoot(document.getElementById('root')).render(<App/>)