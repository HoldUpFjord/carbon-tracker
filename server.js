import express from "express";
import ViteExpress from "vite-express";
const index = fs.readFile(path.resolve("./public/index.html"))

const app = express();
ViteExpress.config({ mode: "production" })

app.get("/", (_, res) => res.send( import.meta.url, 'build', index));

ViteExpress.listen(app, 3000, () => console.log("Server is listening..."));