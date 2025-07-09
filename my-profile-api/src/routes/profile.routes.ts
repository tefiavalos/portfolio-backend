import express from "express";
import {
  getProfile,
  addExperience,
  addEducation,
  addLanguage,
  createProfile,
  addSkill,
  addProject,
  updateProject,
} from "../controllers/profile.controller";

const router = express.Router();

router.get("/", getProfile);

router.post("/experience", addExperience);
router.post("/education", addEducation);
router.post("/language", addLanguage);
router.post("/", createProfile);
router.post("/skills", addSkill);
router.post("/projects", addProject);
router.put("/projects/:id", updateProject);

export default router;
