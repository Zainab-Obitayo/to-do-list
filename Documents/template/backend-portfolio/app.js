const express = require('express');
const portfolioRoutes = require('./src/routes/portfolioRoutes');
const path = require('path'); 

const app = express();
app.use(express.json());

app.use(express.static('public'));
// Serve index.html at /api/portfolio
app.get('/api/portfolio', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Serve index.html at root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use('/api/portfolio', portfolioRoutes);

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});