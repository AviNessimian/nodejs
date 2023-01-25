import fs from 'fs';
import express from "express";
import { Request, Response } from 'express';
import * as dotenv from 'dotenv'

import { hey } from './core/placeholder.js';

dotenv.config()
console.log(process.env.Environment) // remove this after you've confirmed it is working
const port: number = 8000;
const app: express.Application = express();


app.get("/", (req: Request, res: Response) => {
    res.send("Hello From Express");
});

app.listen(port, () => {
    console.log(`now listening on port ${port}`)
});
