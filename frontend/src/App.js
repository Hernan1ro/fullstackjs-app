import React, { useEffect, useState } from "react";
import { Navigate, Routes, Route, BrowserRouter } from "react-router-dom";
import clienteAxios from "./config/axios";
import Pacientes from "./components/Pacientes";
import NuevaCita from "./components/NuevaCita";
import Cita from "./components/Cita";

function App() {
  // State de la aplicación
  const [citas, setCitas] = useState([]);
  useEffect(() => {
    const consultarAPI = () => {
      clienteAxios
        .get("/pacientes")
        .then((res) => setCitas(res.data))
        .catch((err) => console.error(err));
    };
    consultarAPI();
  }, [citas]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pacientes citas={citas} />} />
        <Route path="/nuevacita" element={<NuevaCita />} />
        <Route path="/cita/:id" element={<Cita />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
