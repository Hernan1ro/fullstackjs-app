import React, { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import clienteAxios from "./config/axios";
import Pacientes from "./components/Pacientes";
import NuevaCita from "./components/NuevaCita";
import Cita from "./components/Cita";

function App(props) {
  // State de la aplicación
  const [citas, setCitas] = useState([]);
  const [consultar, setConsultar] = useState(true);

  useEffect(() => {
    if (consultar) {
      const consultarAPI = () => {
        clienteAxios
          .get("/pacientes")
          .then((res) => {
            // Colocar en el state el resultado
            setCitas(res.data);
            // deshabilitar la consulta
            setConsultar(false);
          })
          .catch((err) => console.error(err));
      };
      consultarAPI();
    }
  }, [consultar]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pacientes citas={citas} />} />
        <Route
          path="/nuevacita"
          element={<NuevaCita setConsultar={setConsultar} />}
        />
        <Route
          path="/cita/:id"
          element={<Cita setConsultar={setConsultar} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
