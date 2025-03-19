import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import CoursesPage from "./CoursesPage";
import LoginForm from "./LoginForm";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} /> 
        <Route path="/courses" element={<CoursesPage />} /> 
        <Route path="/login" element={<LoginForm />} /> 
      </Routes>
    </BrowserRouter>
  );
};

export default App;
