import express from 'express';
import dotenv from 'dotenv';
import userRouter from './routes/user.router.js';
import cors from 'cors';

dotenv.config();
const app = express();

app.use(cors()); // frontend ke liye
app.use(express.json()); // json body parse ke liye

app.use('/api/user', userRouter);

const port = process.env.PORT || 2025;
app.listen(port, () => console.log(`Server running on port ${port}`));
