import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Login from './components/login';

function App() {
  return (
   <div className="App">
    <Header />
    <Routes>
     <Route path="/" element={<Login />} />
     <Route path="/login" element={<Login />} />
    </Routes>
   </div>
  );
}

export default App;
