const express = require('express');
const router = express.Router();
const peliculaService = require('../services/peliculaService');
const { validarToken } = require('../middlewares/auth'); 
router.get('/', async (req, res) => {
  const peliculas = await peliculaService.getAll();
  res.json(peliculas);
});

router.get('/:id', async (req, res) => {
  const pelicula = await peliculaService.getById(req.params.id);
  pelicula ? res.json(pelicula) : res.status(404).send('No encontrada');
});

router.post('/', validarToken, async (req, res) => {
  const nueva = await peliculaService.create(req.body);
  res.status(201).json(nueva);
});

router.put('/:id', validarToken, async (req, res) => {
  const actualizada = await peliculaService.update(req.params.id, req.body);
  actualizada ? res.json(actualizada) : res.status(404).send('No encontrada');
});

router.delete('/:id', validarToken, async (req, res) => {
  const eliminada = await peliculaService.delete(req.params.id);
  eliminada ? res.status(204).send() : res.status(404).send('No encontrada');
});

module.exports = router;