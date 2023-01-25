import fs from 'fs';
import express from "express";
import { Request, Response } from 'express';
import { hey } from './core/placeholder.js';


const port = 8000;
const app: express.Application = express();


app.get("/", (req: Request, res: Response) => {
    res.send("Hello From Express");
});

app.listen(port, () => {
    console.log(`now listening on port ${port}`)
});
