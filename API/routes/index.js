const express = require("express");
const router = express.Router();
const pacientesController = require("../controllers/pacienteControllers.js");

module.exports = function () {
  // Agrega nuevos pacientes via Post
  router.post("/pacientes", pacientesController.nuevoCliente);

  return router;
};
