import React, { Suspense, lazy } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home-page/Home";
import { Login } from './pages/Login-page/Login';
import 'sass';
import './scss/custom.scss'

const AdminPage = lazy(() => import('./pages/Admin-page/AdminPage'));

let App = () => {
  return (
    <Router>
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route
          path={`/admin`}
          element={
            <Suspense fallback={null}>
              <AdminPage />
            </Suspense>
          }
        />
        <Route path={`/login`} element={<Login />}/>
      </Routes>
    </Router>
  );
};

export default App;
