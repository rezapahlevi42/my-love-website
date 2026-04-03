import { useState, useEffect, useRef } from 'react'
import { Routes, Route, useNavigate } from "react-router-dom";
import HomeContent from "./HomeContent";
import Birthday from "./Birthday";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeContent />} />
      <Route path="/birthday" element={<Birthday />} />
    </Routes>
);
}

export default App
