import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

//Mongodb Atlas Connection
const CONNECTION_URL = 'mongodb+srv://belva-digital-library:belva-digital-library@belva-digital-library.3ybao.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

';