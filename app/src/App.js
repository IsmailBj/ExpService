import './App.css';
import ExpertCategories from "./components/landingPage/ExpertCategories"
import HomePage from './components/home/home';
import React, { useState } from 'react';

function App() {
  const [view, setView] = useState('land')


  return (
    <div className="main-container">
      {view === 'landP' ? (<ExpertCategories setView={setView} view={view} />) : (<HomePage />)}


    </div>
  );
}

export default App;
