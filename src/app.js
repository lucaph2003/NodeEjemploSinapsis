import express from 'express';
import indexRoutes from './routes/index.routes.js'
import usuariosRoutes from './routes/usuarios.routes.js'

const app = express();

app.use(express.json());

app.use(indexRoutes);
app.use(usuariosRoutes);

export default app;