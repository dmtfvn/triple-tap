import express from 'express';
import cors from 'cors';
import routes from './routes.js';

const app = express();
const port = 3000;

app.use(cors({
  origin: 'http://localhost:5173'
}));
app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}...`);
});
