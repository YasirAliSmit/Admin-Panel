import React from "react";
import Customer from '../components/Customer'
import View from '../components/View'
import Home from "../components/Home";
import Sidebar from "../components/Sidebar";
import {
  BrowserRouter as Router,
  Route,
  Link,
  BrowserRouter,
  Routes,
} from "react-router-dom";

const Navigation = () => {
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/customer" element={<Customer />} />
    <Route path="/view" element={<View />} />
    <Route path="/sidebar" element={<Sidebar />} />
  </Routes>
   
  );
};

export default Navigation;
