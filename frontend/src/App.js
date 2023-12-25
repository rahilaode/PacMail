// App.jsx
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginSignup from "./pages/login-signup";
import Mail from "./pages/mail";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginSignup />} />
          <Route path="/mail/*" element={<Mail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
