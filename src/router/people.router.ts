import express from 'express';
import * as peopleController from '../controllers/people.controller';

const router = express.Router();

router.post('/', peopleController.createPerson);
router.get('/', peopleController.getPeople);

export default router;