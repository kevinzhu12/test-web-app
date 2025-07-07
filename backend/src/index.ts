import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Sample API route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.listen(port, () => {
  console.log(`Backend server is running on http://localhost:${port}`);
});

// To run this server:
// 1. Make sure you have an .env file in the backend directory
//    with a PORT variable defined (e.g., PORT=3001).
// 2. Run 'npm install' to install dependencies.
// 3. Run 'npm run dev' for development (uses nodemon).
// 4. Run 'npm run build' and then 'npm run start' for production.