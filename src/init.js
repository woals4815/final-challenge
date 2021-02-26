import app from "./app";
import dotenv from "dotenv";
import "./db";
import "./models/User";
import "./models/Video";
import "./models/Comment";

dotenv.config();

const PORT = 4000;

const handleListening = () =>
  console.log(`Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);
