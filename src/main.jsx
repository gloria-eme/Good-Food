import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import FilterPlatos from './components/FilterPlatos';
import NotFound from './pages/404';
import Plato from './pages/Plato';
import AddAFood from './pages/AddAFood';






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element = {<App />}>
        <Route index element = {<Home />}/>
        <Route path="/platos" element={<FilterPlatos/>} />
        <Route path="/plato/:id" element={<Plato />} />
       <Route path="/addafood" element={<AddAFood />} />
        <Route path="*" element={<NotFound />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)