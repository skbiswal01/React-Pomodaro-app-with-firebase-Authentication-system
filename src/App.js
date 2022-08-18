import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from 'react'
import Timer from './Timer';
import Login from "./components/Authentication/login";
import Register from "./components/Authentication/Register";

function App() {
  return (
    <div className="app">
    <Router>
      <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/Timer" element={<Timer />} />
      </Routes>
    </Router>
  </div>
  )
}
 
export default App;