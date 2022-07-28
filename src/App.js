import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Container/Dashboard";
import Login from "./Container/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Login to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
