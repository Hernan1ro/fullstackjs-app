import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import clienteAxios from "../config/axios";

const Cita = () => {
  const [cita, setCita] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const consultarCita = () => {
      clienteAxios
        .get(`/pacientes/${id}`)
        .then((res) => setCita(res.data))
        .catch((err) => {
          console.log(err);
          navigate("/");
        });
    };
    consultarCita();
  }, []);
  const { nombre, propietario, telefono, fecha, hora, sintomas } = cita;
  return (
    <>
      <h1 className="my-5">Nombre cita: {nombre}</h1>
      <div className="container mt-5 py-5">
        <div className="row">
          <div className="col-12 mb-5 d-flex justify-content-center">
            <Link
              to="/"
              href="#"
              className="btn btn-success text-uppercase py-2 px-5 font-weight-bold"
            >
              Volver
            </Link>
          </div>
          <div className="col-md-8 mx-auto">
            <div className="list-group">
              <div className="p-5 list-group-item list-group-item-action flex-column align-items-center">
                <div className="d-flex w-100 justify-content-between mb-4">
                  <h3 className="mb-3">{nombre}</h3>
                  <small className="fecha-alta">
                    {fecha} - {hora}
                  </small>
                </div>
                <p className="mb-0">{sintomas}</p>
                <div className="contacto py-3">
                  <p>Dueño: {propietario}</p>
                  <p>Telefono: {telefono}</p>
                </div>
                <div className="d-flex">
                  <button
                    className="text-uppercase py-2 px-5 font-weight-bold btn btn-danger col"
                    type="button"
                  >
                    Eliminar &times;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cita;
