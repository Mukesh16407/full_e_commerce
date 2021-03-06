import React from 'react';
import {Routes,Route,} from "react-router-dom";
import { Home } from './pages/home';
import { Login } from './pages/auth/Login';
import { Register } from './pages/auth/Register';
import { Header } from './component/nav/Header';
const App=()=> {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default App;
