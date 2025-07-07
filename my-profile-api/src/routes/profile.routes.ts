import express from 'express';
import { getProfile, updateProfile, addExperience, addEducation, addLanguage } from '../controllers/profile.controller';

const router = express.Router();

router.get('/', getProfile);

router.post('/experience', addExperience);
router.post('/education', addEducation);
router.post('/language', addLanguage);

export default router;
