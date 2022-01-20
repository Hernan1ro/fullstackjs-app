import React from "react";
import { Navigate, Routes, Route, BrowserRouter } from "react-router-dom";
import Pacientes from "./components/Pacientes";
import NuevaCita from "./components/NuevaCita";
import Cita from "./components/Cita";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pacientes />} />
        <Route path="/nuevacita" element={<NuevaCita />} />
        <Route path="/cita/:id" element={<Cita />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
