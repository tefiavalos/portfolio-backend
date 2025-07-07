import { NextFunction, Request, Response } from 'express';
import { Profile } from '../models/profile.model';

export const getProfile = async (req: Request, res: Response) => {
  try {
    const profile = await Profile.findOne();
    res.json(profile);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener perfil' });
  }
};

export const updateProfile = async (req: Request, res: Response) => {
  try {
    const updated = await Profile.findOneAndUpdate({}, req.body, {
      new: true,
      upsert: true,
    });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar perfil' });
  }
};

export const addExperience = async (req: Request, res: Response) => {
  const profile = await Profile.findOne();
  if (!profile) return res.status(404).json({ message: 'Perfil no encontrado' });
  profile.experiences.push(req.body);
  await profile.save();
  res.status(201).json(profile);
};

export const addEducation = async (req: Request, res: Response) => {
  const profile = await Profile.findOne();
  if (!profile) return res.status(404).json({ message: 'Perfil no encontrado' });
  profile.education.push(req.body);
  await profile.save();
  res.status(201).json(profile);
};

export const addLanguage = async (req: Request, res: Response) => {
  const profile = await Profile.findOne();
  if (!profile) return res.status(404).json({ message: 'Perfil no encontrado' });
  profile.languages.push(req.body);
  await profile.save();
  res.status(201).json(profile);
};
