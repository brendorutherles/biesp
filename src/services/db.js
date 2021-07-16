import mongoose from "mongoose";
import dotenv  from "dotenv";

dotenv.config();

const mongourl = process.env.DB_HOST;

const mongoconfig = {
  useNewUrlParser: true,
  useCreateIndex: true,
};

export default async () => {
  const db = mongoose.connection;

  await mongoose.connect(mongourl, mongoconfig);

  db.on("connecting", function () {
    console.log("connecting to MongoDB...");
  });

  db.on("error", function (error) {
    console.error("Error in MongoDb connection: ", error);
    mongoose.disconnect();
  });

  db.on("connected", function () {
    console.log("MongoDB connected!");
  });

  db.once("open", function () {
    console.log("MongoDB connection opened!");
  });

  db.on("reconnected", function () {
    console.log("MongoDB reconnected!");
  });

  db.on("disconnected", async function () {
    console.log("MongoDB disconnected!");
    await mongoose.connect(mongourl, mongoconfig);
  });

  return db;
};
