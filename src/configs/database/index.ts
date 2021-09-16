import mongoose from "mongoose";
import { dbConfig } from "./database.config";

function connectDb() {
  const { type, database, port, host, username, password } = dbConfig;
  const dbUri = `${type}://${host}:${port}/${database}`;

  return mongoose
    .connect(dbUri)
    .then(() => {
      console.log("Database connected");
    })
    .catch((error: any) => {
      console.error("Database connection error", error);
      process.exit(1);
    });
}

export default connectDb;