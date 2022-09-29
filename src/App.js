import './App.css';
import { lazy } from 'react';

// Importing bootstrap styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'

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
      
    </BrowserRouter>
    </div>
  );
}

export default App;
