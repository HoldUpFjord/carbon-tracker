import express from "express";
import ViteExpress from "vite-express";
import * as path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));



const app = express();
ViteExpress.config({ mode: "production" })

ViteExpress.build();
app.get("/", (_, res) => res.sendFile(path.join( __dirname ,"public", 'index.html' )));
ViteExpress.listen(app, 3000, () => console.log("Server is listening..."));