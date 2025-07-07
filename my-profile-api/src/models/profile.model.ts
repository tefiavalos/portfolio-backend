import mongoose from 'mongoose';

const experienceSchema = new mongoose.Schema({
  company: String,
  position: String,
  technologies: [String],
  description: String,
  startDate: Date,
  endDate: Date,
});

const educationSchema = new mongoose.Schema({
  institution: String,
  degree: String,
  startDate: Date,
  endDate: Date,
});

const languageSchema = new mongoose.Schema({
  name: String,
  level: String,
});

const profileSchema = new mongoose.Schema({
  name: String,
  title: String,
  summary: String,
  experiences: [experienceSchema],
  education: [educationSchema],
  languages: [languageSchema],
});

export const Profile = mongoose.model('Profile', profileSchema);
