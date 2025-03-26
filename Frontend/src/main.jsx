import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// Childish Explanation 🎈               	Professional Explanation 💼
// StrictMode = Safety helmet 🪖	        Helps detect bad practices 🚨
// createRoot = Planting a tree 🌱	      New API for concurrent rendering ⚡
// index.css = House decoration 🎨      	Adds styles to components 🎨
// App = LEGO house 🏠	                  Main component of the app 🏗️
// render() = Building the house 🏗️	     Attaches React app to the DOM 🌍