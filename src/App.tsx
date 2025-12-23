import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home-page/Home";
import AdminPage from './pages/Admin-page/AdminPage';
import { RequireAuth } from 'react-auth-kit';
import { Login } from './pages/Login-page/Login';
import LoginPage from './pages/Login-page/LoginPage';
import 'sass';
import './scss/custom.scss'

let App = () => {
  return (
    <Router>
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/admin`} element={<AdminPage />} />
        <Route path={`/login`} element={<Login />}/>
      </Routes>
    </Router>
  );
};

export default App;
