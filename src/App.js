import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Login from './components/login';
import Friendlist from './components/friendlist';
import Addfriend from './components/addfriend';

function App() {
  return (
   <div className="App">
    <Header />
    <Routes>
     <Route path="/" element={<Login />} />
     <Route path="/login" element={<Login />} />
     <Route path="/friendlist" element={<Friendlist />} />
     <Route path="/addfriend" element={<Addfriend />} />
    </Routes>
   </div>
  );
}

export default App;
