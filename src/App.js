import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import {Datasort} from './components/Datasort';
import Abstract from "./components/Abstract";
// import AddMembers from './components/AddMembers';
import AddMembers from './components/AddMembers';

function App() {
  
  return (
    <div className='main-container'>
      <BrowserRouter>
     
     
        <Navbar/>                        
                   <Abstract/>
                  <Datasort/>
                  <Footer/>
      </BrowserRouter>
      {/* <BrowserRouter>
        <Navbar />     
          <Abstract/>
          <Switch>
              <Route exact path="/join">
                 <AddMembers />
              </Route>
          <Datasort/>
          </Switch>        
          <Footer/>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
