
import express, { Router } from 'express';
import transactionRouter from './Routes/transactionRoutes.js';
import databaseRoutes from './Routes/databaseRoutes.js';
import bodyParser from 'body-parser';
import cors from 'cors';

import dbConnection from './database/db.js';

const app= express();


app.use(
    cors({
        credentials: true,
        origin:'http://localhost:5173'
    })
);

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json({extended:true}))
app.use(express.json());


const PORT =process.env.PORT || 7000;

dbConnection();

app.use('/', databaseRoutes) // Database Routes
app.use('/', transactionRouter); //Tranasction Routes

app.listen(PORT,()=> console.log(`Server is working on ${PORT}`))