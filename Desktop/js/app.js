fetch("http://localhost:27017/pacientes")
  .then((res) => res.json())
  .then((data) => mostrarCitas(data))
  .catch((err) => console.log(err));

function mostrarCitas(citas) {
  const contenedorCitas = document.querySelector("#citas");

  citas.forEach((cita) => {
    contenedorCitas.innerHTML += `<div class="p-5 list-group-item list-group-item-action flex-column align-items-start">
        <div class="d-flex w-100 justify-content-between mb-4">
          <h3 class="mb-3">${cita.nombre}</h3>
          <small class="fecha-alta">
            ${cita.fecha} - ${cita.hora}
          </small>
        </div>
        <p class="mb-0">${cita.sintomas}</p>
        <div class="contacto py-3">
          <p>Dueño: ${cita.propietario}</p>
          <p>Telefono: ${cita.telefono}</p>
        </div>
      </div>`;
  });
}
