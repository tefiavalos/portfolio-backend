import mongoose from 'mongoose';
import app from './app'; 

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || '';

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('Conectado a MongoDB');
    app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));
  })
  .catch((err) => {
    console.error('Error al conectar a MongoDB:', err);
  });