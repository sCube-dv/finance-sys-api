import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

/* express app */
const app = express();

/* middlewares */
app.use(cors());
app.use(express.json());

/* routes */
app.get('/', (req, res) => {
    res.status(200).send({
        message: 'Finance System API is running'
    });
});

export default app;
