import './App.css';
import { lazy } from 'react';
import { Routes, BrowserRouter, Route, Navigate } from 'react-router-dom';

// Importing bootstrap styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import React from 'react';

const { PUBLIC_URL } = process.env;

console.log("Public URL: " + PUBLIC_URL);

const Index = lazy(() => import('./pages/Index'));
const Contact = lazy(() => import('./pages/Contact'));
const OfferOne = lazy(() => import('./pages/OfferOne'));
const OfferTwo = lazy(() => import('./pages/OfferTwo'));
const About = lazy(() => import('./pages/About'))

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Navigate to="/de/" replace />}/>
          <Route path="/de/" element={<Index lang="de" />}/>
          <Route path="/fr/" element={<Index lang="fr" />}/>
          <Route path="/de/contact" element={<Contact lang="de" />}/>
          <Route path="/fr/contact" element={<Contact lang="fr" />}/>
          <Route path="/de/1" element={<OfferOne lang="de" />}/>
          <Route path="/fr/1" element={<OfferOne lang="fr" />}/>
          <Route path="/de/2" element={<OfferTwo lang="de" />}/>
          <Route path="/fr/2" element={<OfferTwo lang="fr" />}/>
          <Route path="/de/about" element={<About lang="de" />}/>
          <Route path="/fr/about" element={<About lang="fr" />}/>
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
