import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./about";

const Home = () => <h1>Home Page</h1>;
const Settings = () => <h1>Settings Page</h1>;
const NumbaFour = () => <h1>Page Four</h1>;

export default function App () {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/settings">Settings</Link></li>
          <li><Link to="/goon">Page 4</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/goon" element={<NumbaFour />} />
      </Routes>
    </BrowserRouter>
  );
};

