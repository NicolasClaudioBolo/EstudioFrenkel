import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './views/Home';
import About from './views/About';
import Error from './views/Error';
import './App.css';

const App = () => {
  return (
          <Router>
            <Header />
              <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/views/About' element={<About />}/>
                <Route path='/*' element={<Error />}/>
              </Routes>
            <Footer/>
          </Router>
  );
}

export default App;
