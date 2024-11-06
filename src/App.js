import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Home.tsx';
import Header from './components/Header.tsx';
import Login from './components/login.tsx';
import { login, signUp } from './authFunctions';
import './App.css';

function App() {
  const eml = ['s', 'j', 'k'];
  const [loginForm, setLoginForm] = useState(false);

  const loginCheck = (isLogin) => {
    console.log(isLogin);
    setLoginForm(isLogin);
  };

  return (
    <Router>
      <Header prop="hi" name={eml} onEmit={loginCheck} />
      <Routes>
        <Route path="/" element={loginForm ? <Login onLogin={login} onSignup={signUp} /> : <Homepage props="hi" name="hi" />} />
        <Route path="/login" element={<Login onLogin={login} onSignup={signUp} />} />
      </Routes>
    </Router>
  );
}

export default App;
