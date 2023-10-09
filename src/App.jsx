import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from './pages/NotFound';
import Home from './pages/Home.jsx';
import Navbar from './components/Navbar.jsx';
import Buildings from './pages/Buildings';
import Rooms from './pages/Rooms';
import Footer from './components/Footer';
import Login from './pages/Login';
import { useEffect, useState } from 'react';
import { gapi } from 'gapi-script';
import { config } from './config/config'

function App() {
  const [ isLogin, setIsLogin ] = useState(null);
  

  return (
    <>
      <Navbar isLogin={isLogin ? true : false} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/buildings' element={<Buildings />} />
          <Route path='/rooms' element={<Rooms />} />
          <Route path='/login' element={<Login  />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;
