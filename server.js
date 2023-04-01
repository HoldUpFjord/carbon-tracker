import express from 'express';


import path from 'path';

const app = express();
const port = 3000;

const staticPath = path.resolve(__dirname, 'dist');

app.use(express.static(staticPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(staticPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});