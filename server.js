import express from 'express';
import { createServer as createViteServer } from 'vite';

async function start() {
  const app = express();

  // Create Vite server in middleware mode
  const vite = await createViteServer({
    server: { middlewareMode: true }
  });

  // Use Vite's middleware
  app.use(vite.middlewares);

  // Serve static assets
  app.use(express.static('public'));

  // Start the server
  const port = 3000;
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}

start();