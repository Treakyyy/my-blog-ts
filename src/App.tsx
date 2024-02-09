import React from 'react';
import './App.css';
import MainPage from './components/mainPage/MainPage';
import {HashRouter, Route, Routes} from 'react-router-dom'
import CardId from './components/body/Card/CardId';

function App() {
  return (
    <HashRouter basename='/'>
      <div className="App">
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/blog/:id' element={<CardId/>}/>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
