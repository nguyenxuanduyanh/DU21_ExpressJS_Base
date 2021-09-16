import express from 'express';
import connectDb from './database/index'
export default function (app: express.Express) {
  connectDb();
}
