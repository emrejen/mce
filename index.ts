import { ApplicationServer } from './app/server';
import express from 'express';
const app = express();

new ApplicationServer(app).withPort(8080).boot();
