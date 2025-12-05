import express from 'express';
import fs from 'fs';
import url from 'url';
import path from 'path';

const router = express.Router();

// __dirname setup
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataPath = path.join(__dirname, '../../frontend/data.js');

// Initialize users array from existing data.js
let users = [];
if (fs.existsSync(dataPath)) {
  const fileData = fs.readFileSync(dataPath, 'utf-8');

  // Extract JSON from export statement
  const match = fileData.match(/export const users = (.*);/s);
  if (match && match[1]) {
    try {
      users = JSON.parse(match[1]);
    } catch (err) {
      console.error("Error parsing data.js:", err);
      users = [];
    }
  }
}

router.post('/add', (req, res) => {
  const newUser = req.body;

  users.push(newUser); // push new user

  const fileContent = `export const users = ${JSON.stringify(users, null, 2)};`;
  fs.writeFileSync(dataPath, fileContent, 'utf-8');

  res.json({ message: 'User added successfully!', totalUsers: users.length });
});

export default router;
