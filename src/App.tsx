import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import PrivateRoute from './utils/router/privateRoute';
import Home from './components/home';
import LoginPage from './components/auth/login';


function App() {
  return (
    <div className="App">

        <Routes>
          <Route element={<PrivateRoute />}>
            <Route element={<Home />} />
          </Route>

          <Route element={<LoginPage />} />
        </Routes>
    </div>
  );
}

export default App;
