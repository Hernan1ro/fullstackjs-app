const Paciente = require("../models/Paciente.js");

//Cuando se crea un nuevo client

exports.nuevoCliente = async (req, res, next) => {
  // Crear objeto de paciente con datos de req.body
  const paciente = new Paciente(req.body);
  //TODO: Insertar en la base de datos
  try {
    const resultado = await paciente.save();
    res.json({ mensaje: "El cliente se agregó correctamente" });
    console.log(resultado);
  } catch (err) {
    console.log("No se pudo agregar al paciente " + err);
    next();
  }
};

//Obtiene los pacientes

exports.obtenerPacientes = async (req, res, next) => {
  try {
    const pacientes = await Paciente.find({});
    res.json(pacientes);
  } catch (err) {
    console.log(err);
    next();
  }
};

// Obtener paciente por id
exports.obtenerPaciente = async (req, res, next) => {
  try {
    const paciente = await Paciente.findById(req.params.id);
    res.json(paciente);
  } catch (err) {
    console.log(err);
    next();
  }
};

// Actualiza un registro por su Id
exports.actualizarPaciente = async (req, res, next) => {
  try {
    const paciente = await Paciente.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
      }
    );
    res.json(paciente);
  } catch (err) {
    console.log(err);
    next();
  }
};

// Elimina un paciente por su Id
exports.borrarPaciente = async function (req, res, next) {
  try {
    await Paciente.findOneAndDelete({ _id: req.params.id });
    res.json({ mensaje: "El paciente fue eliminado" });
  } catch (err) {
    console.log(err);
    next();
  }
};
