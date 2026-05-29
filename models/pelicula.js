const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'
});

const Pelicula = sequelize.define('Pelicula', {
  Titulo: { type: DataTypes.STRING, allowNull: false },
  Director: { type: DataTypes.STRING },
  Año: { type: DataTypes.INTEGER },
  Genero: { type: DataTypes.STRING }, 
  Duracion: { type: DataTypes.INTEGER } 
});

sequelize.sync();

module.exports = Pelicula;