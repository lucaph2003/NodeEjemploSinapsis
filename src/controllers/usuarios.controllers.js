import datosUsuarios from './datos.js'; 

export const getUsers = (req, res) => {
    res.send(datosUsuarios.usuarios);
};

export const postUser = (req, res) => {
      const nuevoUsuario = req.body; 
      if(!nuevoUsuario) {
          return res.status(400).json({ message: 'Faltan datos del usuario' }); 
      }
      datosUsuarios.usuarios.push(nuevoUsuario);
      res.status(201).json(nuevoUsuario); 
};
    
export const getUserById = (req, res) => {
      const userId = parseInt(req.params.id);
      const usuario = datosUsuarios.usuarios.find(user => user.id === userId); 
      if (usuario) {
        res.json(usuario); 
      } else {
        res.status(404).json({ message: 'Usuario no encontrado' });
      }
};