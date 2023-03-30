import express from "express";
import ViteExpress from "vite-express";


const app = express();
ViteExpress.config({ mode: "production" })

app.get("/", (_, res) => res.send( import.meta.url, 'public', index.html));

ViteExpress.listen(app, 3000, () => console.log("Server is listening..."));