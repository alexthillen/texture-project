import { lazy } from 'react';
import { Routes, HashRouter, Route, Navigate } from 'react-router-dom';
import Index from './pages/Index';
import Contact from 'pages/Contact';
import OfferOne from 'pages/OfferOne';
import OfferTwo from 'pages/OfferTwo';
import About from 'pages/About';

// Importing bootstrap styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import React from 'react';

const { PUBLIC_URL } = process.env;

console.log("Public URL: " + PUBLIC_URL);


function App() {
  return (
    <div className="App">
      <HashRouter basename='/'>
        <Routes>
          <Route path="" element={<Navigate to="/de" />}/>
          <Route path="/" element={<Navigate to="/de" />}/>
          <Route path="/de" element={<Index lang="de" />}/>
          <Route path="/fr" element={<Index lang="fr" />}/>
          <Route path="/de/contact" element={<Contact lang="de" />}/>
          <Route path="/fr/contact" element={<Contact lang="fr" />}/>
          <Route path="/de/1" element={<OfferOne lang="de" />}/>
          <Route path="/fr/1" element={<OfferOne lang="fr" />}/>
          <Route path="/de/2" element={<OfferTwo lang="de" />}/>
          <Route path="/fr/2" element={<OfferTwo lang="fr" />}/>
          <Route path="/de/about" element={<About lang="de" />}/>
          <Route path="/fr/about" element={<About lang="fr" />}/>
        </Routes>
    </HashRouter>
    </div>
  );
}

export default App;
