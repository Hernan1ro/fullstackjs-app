import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import clienteAxios from "../config/axios";

const Cita = () => {
  const [cita, setCita] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const consultarCita = () => {
      clienteAxios
        .get(`/pacientes/${id}`)
        .then((res) => setCita(res.data))
        .catch((err) => console.log(err));
    };
    consultarCita();
  }, []);

  console.log(cita);

  return <h1>Desde Cita</h1>;
};

export default Cita;
