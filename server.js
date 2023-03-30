import express from "express";
import ViteExpress from "vite-express";
import * as http from 'http'; 
const app = express();

ViteExpress.build();

const server = http.createServer(app).listen(3000, () => { 
   console.log("Server is listening!")
});
ViteExpress.bind(app, server);