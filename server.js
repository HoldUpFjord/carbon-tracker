import express from "express";
import ViteExpress from "vite-express";

const app = express();
ViteExpress.config({ mode: "production" })

app.get("/message", (_, res) => res.send("Hello from express!"));

app.use(express.static('build'))
ViteExpress.listen(app, 3000, () => console.log("Server is listening..."));