import express from 'express';
import cors from 'cors';

const app = express();
const port = 5000;

app.use(cors()); // Permitir CORS

app.get('/api/pizzas', (req, res) => {
  // Tus datos de pizzas...
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
