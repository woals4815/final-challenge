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
import apiRouter from "./routers/apiRouter";
import path from "path";

dotenv.config();

const app = express();

const MongoStore = require("connect-mongo").default;

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use("/static", express.static(path.join(__dirname, "static")));
app.use(cookieParser());
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
app.use(localMiddleware);
app.use(routes.user, userRouter);
app.use(routes.home, globalRouter);
app.use(routes.videos, videoRouter);
app.use(routes.api, apiRouter);
export default app;
