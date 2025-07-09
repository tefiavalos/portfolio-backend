import { NextFunction, Request, Response } from "express";
import { Profile } from "../models/profile.model";

export const getProfile = async (req: Request, res: Response) => {
  try {
    const profile = await Profile.findOne();
    res.json(profile);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener perfil" });
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
    res.status(500).json({ error: "Error al actualizar perfil" });
  }
};

export const addExperience = async (req: Request, res: Response) => {
  const profile = await Profile.findOne();
  if (!profile)
    return res.status(404).json({ message: "Perfil no encontrado" });
  profile.experiences.push(req.body);
  await profile.save();
  res.status(201).json(profile);
};

export const addEducation = async (req: Request, res: Response) => {
  const profile = await Profile.findOne();
  if (!profile)
    return res.status(404).json({ message: "Perfil no encontrado" });
  profile.education.push(req.body);
  await profile.save();
  res.status(201).json(profile);
};

export const addLanguage = async (req: Request, res: Response) => {
  const profile = await Profile.findOne();
  if (!profile)
    return res.status(404).json({ message: "Perfil no encontrado" });
  profile.languages.push(req.body);
  await profile.save();
  res.status(201).json(profile);
};

export const createProfile = async (req: Request, res: Response) => {
  try {
    // Check if profile already exists
    const existing = await Profile.findOne();
    if (existing) {
      return res.status(400).json({ message: "Ya existe un perfil" });
    }
    const profile = new Profile(req.body);
    await profile.save();
    res.status(201).json(profile);
  } catch (error) {
    res.status(500).json({ error: "Error al crear perfil" });
  }
};

export const addSkill = async (req: Request, res: Response) => {
  const profile = await Profile.findOne();
  if (!profile)
    return res.status(404).json({ message: "Perfil no encontrado" });
  if (!Array.isArray(req.body.skills)) {
    return res.status(400).json({ message: "Se espera un array de skills" });
  }
  profile.skills.push(...req.body.skills);
  await profile.save();
  res.status(201).json(profile);
};

export const addProject = async (req: Request, res: Response) => {
  const profile = await Profile.findOne();
  if (!profile)
    return res.status(404).json({ message: "Perfil no encontrado" });
  profile.projects.push(req.body);
  await profile.save();
  res.status(201).json(profile);
};

export const updateProject = async (req: Request, res: Response) => {
  const { id } = req.params;
  const profile = await Profile.findOne();
  if (!profile)
    return res.status(404).json({ message: "Perfil no encontrado" });
  const project = profile.projects.id(id);
  if (!project)
    return res.status(404).json({ message: "Proyecto no encontrado" });
  Object.assign(project, req.body);
  await profile.save();
  res.status(200).json(profile);
};
