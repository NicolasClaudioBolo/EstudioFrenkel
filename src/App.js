import React from 'react';
import './App.css';
import { Container } from 'reactstrap';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './views/Home'
import About from './views/About'
import Contact from './views/Contact'
// import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
      <Container className='container-fluid'>
          <Router>
            <Header />
              <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/views/About' element={<About />}/>
                <Route path='/views/Contact' element={<Contact />}/>
              </Routes>
            <Footer />
          </Router>
      </Container>
  );
}

export default App;
