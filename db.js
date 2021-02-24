import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

const handleOpen = () => console.log("Connect Success! 👊");
const handleError = (error) => console.log(`❌ Connection Error: ${error}`);

db.once("open", handleOpen);
db.on("error", handleError);
