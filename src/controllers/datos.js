let usuarios = [
  {
    "id": 1,
    "username": "DiegoPerrone",
    "password": "sinseguridad123",
    "email": "DiegoPerrone@Mail.com"
  },
  {
    "id": 2,
    "username": "JadsonViera",
    "password": "sinseguridad123",
    "email": "JadsonViera@Mail.com"
  },
  {
    "id": 3,
    "username": "CocoConde",
    "password": "sinseguridad123",
    "email": "CocoConde@Mail.com"
  }
];

class DatosUsuarios {
constructor() {
  if (!DatosUsuarios.instance) {
    this.usuarios = usuarios;
    DatosUsuarios.instance = this;
  }
  return DatosUsuarios.instance;
}
}

const datosUsuarios = new DatosUsuarios();

export default datosUsuarios;
