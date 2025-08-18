import { Router } from 'express';

import { readFromFile } from '../fs/fsManager.js';

import gameService from '../services/gameService.js';

const gameController = Router();

gameController.get('/', async (req, res) => {
  try {
    const result = await readFromFile();

    res.status(200).json(result);
  } catch (err) {
    res.status(503).json({ message: 'Data not available' });
  }
});

gameController.post('/', async (req, res) => {
  const data = req.body;

  try {
    const result = await gameService.post(data);

    res.status(201).json(result);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
});

gameController.put('/:id', async (req, res) => {
  const dataId = req.params.id;
  const data = req.body;

  try {
    const result = await gameService.put(dataId, data);

    res.status(201).json(result);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

gameController.delete('/:id', async (req, res) => {
  const dataId = req.params.id;

  try {
    const result = await gameService.del(dataId);

    res.status(201).json(result);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

export default gameController;
