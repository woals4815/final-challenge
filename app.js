import express from "express";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";

const app = express();
app.set("view engine", "pug");
app.use(routes.home, globalRouter);

export default app;
