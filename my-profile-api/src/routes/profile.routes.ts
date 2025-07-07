import express from 'express';
import { getProfile, updateProfile, addExperience, addEducation, addLanguage, createProfile } from '../controllers/profile.controller';

const router = express.Router();

router.get('/', getProfile);

router.post('/experience', addExperience);
router.post('/education', addEducation);
router.post('/language', addLanguage);
router.post('/', createProfile);

export default router;
