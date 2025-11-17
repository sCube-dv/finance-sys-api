import express from 'express';
import User from '../controllers/UserController.js';

const router = express.Router();

router.post('/', User.create);
// router.get('/', User.search);
// router.put('/', User.edit);
// router.delete('/:id', User.delete);

