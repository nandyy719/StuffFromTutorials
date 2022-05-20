import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path = '/'  element = {<App />} />
        <Route path = '/about' element = {<About />} />

      </Routes>
    </Router>
    
  </React.StrictMode>
)
