import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
import {Datasort} from './components/Datasort';
import Abstract from "./components/Abstract";

function App() {
  return (
    <div className='main-container'>
      <BrowserRouter>
     
        <Navbar/>             
                  <Abstract/>
                  <Datasort/>
                  <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
