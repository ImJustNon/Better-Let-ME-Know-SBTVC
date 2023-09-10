import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from './pages/NotFound';
import Home from './pages/index.jsx';
import Navbar from './components/Navbar.jsx';
import Buildings from './pages/Buildings';
import Rooms from './pages/Rooms';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/buildings' element={<Buildings />} />
          <Route path='/rooms' element={<Rooms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;
