const express = require('express');
const router = express.Router();
const authService = require('../services/authService');

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const token = await authService.login(username, password);
  if (token) return res.json({ token });
  res.status(401).json({ error: 'Credenciales inválidas' });
});

module.exports = router;