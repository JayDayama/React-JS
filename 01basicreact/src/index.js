// core foundational library that takes all the refrences and all
import React from 'react';
import ReactDOM from 'react-dom/client';
// reactDOM is implementation of above library on our WEB

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <App />

  // <React.StrictMode> -> for optimization purposes in development
    // <App /> -> hum yeh (app) ek function se html render karwa rhe hai
    // {/* jsx ke thru (i.e : js ke thru) hum apne html elements ko render kar pa rhe hai --> a custom tag */}
  // </React.StrictMode>
);
