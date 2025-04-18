import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);

// Childish Explanation 🎈               	Professional Explanation 💼
// StrictMode = Safety helmet 🪖	        Helps detect bad practices 🚨
// createRoot = Planting a tree 🌱	      New API for concurrent rendering ⚡
// index.css = House decoration 🎨      	Adds styles to components 🎨
// App = LEGO house 🏠	                  Main component of the app 🏗️
// render() = Building the house 🏗️	     Attaches React app to the DOM 🌍