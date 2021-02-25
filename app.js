import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import passport from "passport";
import { localMiddleware } from "./middlewares/localMiddleware";
import globalRouter from "./routers/globalRouter";
import videoRouter from "./routers/videoRouter";
import routes from "./routes";
import "./passport";
import session from "express-session";
import userRouter from "./routers/userRouter";

dotenv.config();

const app = express();

const MongoStore = require("connect-mongo").default;

app.use(cookieParser());
app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("static"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));
// 이 부분 강의 다시 듣기
app.use(
  session({
    secret: process.env.SECRET_KEY,
    resave: true,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URL,
    }),
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.set("view engine", "pug");
app.use(localMiddleware);
app.use(routes.user, userRouter);
app.use(routes.home, globalRouter);
app.use(routes.videos, videoRouter);

export default app;
