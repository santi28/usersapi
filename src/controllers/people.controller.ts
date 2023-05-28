import { Request, Response } from 'express';
import PersonModel from '../models/person.model';

export const createPerson = async (req: Request, res: Response) => {
  try {
    const { name, age } = req.body;
    const person = new PersonModel({ name, age });
    await person.save();
    res.status(201).json(person);
  } catch (error) {
    console.error('Failed to create person', error);
    res.status(500).json({ error: 'Failed to create person' });
  }
};

export const getPeople = async (_req: Request, res: Response) => {
  try {
    const people = await PersonModel.find();
    res.json(people);
  } catch (error) {
    console.error('Failed to get people', error);
    res.status(500).json({ error: 'Failed to get people' });
  }
};
