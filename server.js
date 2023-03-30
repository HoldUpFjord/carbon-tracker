
import express from "express";
import ViteExpress from "vite-express";
const app = express();

ViteExpress.config({ mode: "production" })
app.use(express.static('build', options))

app.get("/message", (_, res) => res.send("Hello from express!"));

const port = process.env.PORT || 3000
ViteExpress.listen(app, port, () => console.log("Server is listening on 3000..."));