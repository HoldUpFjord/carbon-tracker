import express from "express";
import ViteExpress from "vite-express";


const app = express();
ViteExpress.config({ mode: "production" })

app.get("/", (_, res) => res.sendFile(path.join(import.meta.url, 'build', 'index.html')));
ViteExpress.listen(app, 3000, () => console.log("Server is listening..."));