import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './views/Home'
import About from './views/About'
import Contact from './views/Contact'
import Tarjeta from './components/Card/Tarjeta';

const App = () => {
  return (
          <Router>
            <Header />
              <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/views/About' element={<About />}/>
                <Route path='/views/Contact' element={<Contact />}/>
              </Routes>
              <Tarjeta />
            <Footer />
          </Router>
  );
}

export default App;
