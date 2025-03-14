import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
app.use(cors());
app.use(bodyParser.json());  // ✅ Corrected this line

let users = [];

// ✅ Fixed GET route to avoid "Cannot GET /" error
app.get('/', (req, res) => {
  res.send('Server is running! Use /api/register or /api/login');
});

app.post('/api/register', (req, res) => {
  const { username, email, password } = req.body;

  if (users.find(user => user.email === email)) {
    return res.status(400).json({ message: 'Email already registered' });
  }

  users.push({ username, email, password });
  res.status(200).json({ message: 'User registered successfully' });
});

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(user => user.email === email && user.password === password);

  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  res.status(200).json({ message: 'Login successful', user });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
