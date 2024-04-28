import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostsTable from "./components/PostsTable";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./components/style.css";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<PostsTable />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
