const express = require('express');
const app = express();
const PORT = 3000;

let downloadCount = 0;

// Middleware pour autoriser les requêtes CORS (à ajuster selon tes besoins)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Endpoint pour obtenir le nombre de téléchargements
app.get('/api/downloadCount', (req, res) => {
  res.json({ count: downloadCount });
});

// Endpoint pour incrémenter le nombre de téléchargements
app.post('/api/incrementDownload', (req, res) => {
  downloadCount++;
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
