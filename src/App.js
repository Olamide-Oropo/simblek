import React from 'react';
import Home from "./routes/Home";
import Contactus from "./routes/Contactus";
import Products from './routes/Products';
import Aboutus from "./routes/Aboutus";
import Services from "./routes/Services";
import NotFound from './routes/NotFound';
import { Route,Routes,BrowserRouter as Router } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/simblek' element={<Home />}/>
        <Route path='/simblek/contact' element={<Contactus />}/>
        <Route path='/simblek/products' element={<Products />}/>
        <Route path='/simblek/about' element={<Aboutus />}/>
        <Route path='/simblek/services' element={<Services />}/>
        <Route path='/*' element={<NotFound />}/>
      </Routes>
    </Router>
  );
}

export default App;
