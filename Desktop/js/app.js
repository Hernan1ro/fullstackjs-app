fetch("http://localhost:27017/pacientes")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
