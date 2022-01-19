const express = require("express");
const router = express.Router();
const pacientesController = require("../controllers/pacienteControllers.js");

module.exports = function () {
  // Agrega nuevos pacientes via Post
  router.post("/pacientes", pacientesController.nuevoCliente);

  // Obtiene todos los registros de pacientes en la body
  router.get("/pacientes", pacientesController.obtenerPacientes);

  // Obtiene un paciente en especifico
  router.get("/pacientes/:id", pacientesController.obtenerPaciente);

  // Actualizar un registro con un Id especifico
  router.put("/pacientes/:id", pacientesController.actualizarPaciente);
  return router;
};
