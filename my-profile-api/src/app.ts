import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import profileRoutes from './routes/profile.routes';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/profile', profileRoutes);

export default app;
