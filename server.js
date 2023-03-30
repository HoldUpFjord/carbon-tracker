
import express from "express";
import ViteExpress from "vite-express";

const app = express();
const server = http.createServer(app).listen(3000, () => { 
   console.log("Server is listening!")
});
ViteExpress.bind(app, server);