import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Backgroundimg from './components/Backgroundimg';
import { styles } from 'react-responsive-carousel/lib/styles/carousel.min.css';
import About from './components/About'
import { Fragment } from 'react';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './components/Contact';
import Login from './components/Login';
function App() {
  return (
    <BrowserRouter>
    <Fragment>
    
    <Routes>
      <Route path='/' element={<About></About>}></Route>
      {/* <Route path='/' element={Gallery}></Route> */}
        <Route path={'/contact'} element={<Contact></Contact>}></Route>
      </Routes>  
    
    </Fragment>
    <Routes>
    <Route path={'/login'} element={<Login></Login>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
