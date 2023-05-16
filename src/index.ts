import express ,{Application} from "express";

import  router from './routes';
import * as dotenv from "dotenv";
import path from "path"

dotenv.config();

import './database';

export const app:Application = express();






app.use(express.json());





app.use(express.static(path.join(__dirname, "public")));
app.use(router);


if (process.env.NODE_ENV !== 'test') {
    app.listen(8000);
}
