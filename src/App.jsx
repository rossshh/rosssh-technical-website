import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Services from './pages/Services';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Error from './pages/Error';
import Logout from './pages/Logout';
import AdminLayout from './components/layouts/AdminLayout';
import AdminContacts from './pages/AdminContacts';
import AdminUsers from './pages/AdminUsers';
import AdminUpdate from './pages/AdminUpdate';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path='/service' element={<Services />} />
            <Route path='/about' element={<About />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/logout' element={<Logout />} />
            <Route path="/admin" element={<AdminLayout />}>
              <Route path="users" element={<AdminUsers />} >
                <Route path='update' element={<AdminUpdate />} />
              </Route>
              <Route path="contacts" element={<AdminContacts />} />
            </Route> 
            <Route path='*' element={<Error />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
