const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const bodyParser = require("body-parser");
const cors = require("cors");
// Crear el servidor
const app = express();

// Habilitar cors para un domino en especifico
const whiteList = ["http://localhost:3000"];
const corsOption = {
  origin: (origin, callback) => {
    const existe = whiteList.some((dominio) => dominio === origin);
    if (existe) {
      callback(null, true);
    } else {
      callback(new Error("No permitido por CORS"));
    }
  },
};

// app.use(cors(corsOption))

// Habilitar cors para todos los dominios
app.use(cors());

const url =
  "mongodb+srv://hernan1ro:techlover@veterinaria.mtzfx.mongodb.net/veterinaria?retryWrites=true&w=majority";

// Conectar a mongoDB
// mongoose.Promise = global.Promise;
mongoose
  .connect(url, (err) => {
    if (!err) {
      console.log("db conected");
    } else {
      console.log("db error");
    }
  })
  .then(() => console.log("Base DB conectada"))
  .catch((err) => console.log("Ha habido un error ", err));

// Habilitar el body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Habilitar routing
app.use("/", routes());

// Definir el puerto

app.listen(27017, () => {
  console.log("Servidor funcionando en el puerto " + 27017);
});
