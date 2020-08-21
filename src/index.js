import React from 'react';
import ReactDOM from 'react-dom';


// Create a reusable render method that we can call more than once
let render = () => {
  // Dynamically import our main App component, and render it
  const MainApp = require('./MainApp').default;
  ReactDOM.render(<MainApp/>,document.getElementById('root'));

     }


render();
