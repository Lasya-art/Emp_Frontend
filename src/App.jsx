import { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import EmployeeManagementApp from './Components/EmployeeManagementApp';
import EmployeeDetails from './Components/EmployeeDetails';
import Home from './Components/Home';
import Departments from './Components/Department';
import "./App.css";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="employee" />} />
          <Route path="/employee" element={<EmployeeManagementApp />} />
          <Route path="/employee/:id" element={<EmployeeDetails />} />
          <Route path="/home" element={<Home />} />
          <Route path="/department" element={<Departments />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
