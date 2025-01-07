const express = require('express');
const Note = require('../models/Note');

const router = express.Router();

// Criar uma nova nota
router.post('/', async (req, res) => {
  const { title, content } = req.body;
  try {
    const newNote = new Note({ title, content });
    await newNote.save();
    res.status(201).json(newNote);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar nota' });
  }
});

// Buscar todas as notas
router.get('/', async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar notas' });
  }
});

// Editar uma nota
router.put('/:id', async (req, res) => {
  try {
    const note = await Note.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(note);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao editar nota' });
  }
});

// Deletar uma nota
router.delete('/:id', async (req, res) => {
  try {
    await Note.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar nota' });
  }
});

module.exports = router;
