const express = require("express");
const mongoose = require("mongoose");

// Crear el servidor
const app = express();

// Conectar a mongoDB
mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost/veterinaria", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

// Definir el puerto

app.listen(4000, () => {
  console.log("Servidor funcionando");
});
