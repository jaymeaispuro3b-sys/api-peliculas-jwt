const express = require('express');
const peliculasRoutes = require('./routes/peliculas');
const authRoutes = require('./routes/auth');
const logger = require('./middlewares/logger');

const app = express();
app.use(express.json());
app.use(logger);

app.use('/auth', authRoutes);
app.use('/peliculas', peliculasRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo con éxito en el puerto ${PORT}`);
});